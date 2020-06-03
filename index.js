let subtitles = `` //<-- put the lyrics between the ``

let timeStamps = subtitles
	.replace(/\n/g, " ")
	.replace(/,/g, ".")
	.split(" ")
	.filter((subtitle) => /:/.test(subtitle))

function calculateTime(firstNumber, secondNumber) {
	let splitFirstNumber = convertTimeStamp(firstNumber)
	let splitSecondNumber = convertTimeStamp(secondNumber)

	for (let i = 2; i >= 0; i--) {
		splitSecondNumber[i] = splitSecondNumber[i] - splitFirstNumber[i]
		if (splitSecondNumber[i] < 0) {
			splitSecondNumber[i] = 60 + splitSecondNumber[i]
			splitSecondNumber[i - 1] = splitSecondNumber[i - 1] - 1
		}
		if (splitSecondNumber[i] == 60) {
			splitSecondNumber[i] = 0
			splitSecondNumber[i - 1] = splitSecondNumber[i - 1] - 1
		}
		splitSecondNumber[i] = String(splitSecondNumber[i])
		splitSecondNumber[i] =
			splitSecondNumber[i].length === 2
				? splitSecondNumber[i]
				: "0" + splitSecondNumber[i]
	}
	splitSecondNumber = splitSecondNumber.reduce((x, y) => x + ":" + y)
	return splitSecondNumber
}

function convertTimeStamp(timeStamp) {
	timeStamp = timeStamp.split(":")
	timeStamp[timeStamp.length - 1] = Math.round(
		timeStamp[timeStamp.length - 1]
	)
	if (timeStamp[timeStamp.length - 1] === 60)
		timeStamp[timeStamp.length - 1] = 59
	return timeStamp
}

let str = ""
let z = 1
for (let i = 1; i < timeStamps.length; i++) {
	if (i % 2 != 0) {
		let firstTime = convertTimeStamp(timeStamps[i - 1])
		if (firstTime[2] / 1 < 10) firstTime[2] = "0" + firstTime[2]
		firstTime = String(firstTime).replace(/,/g, ":")
		str += `ffmpeg -i "FILENAME" -ss ${firstTime} -t ${calculateTime(
			timeStamps[i - 1],
			timeStamps[i]
		)} output${z}.mkv;`
		z += 1
	}
}

console.log(str)
