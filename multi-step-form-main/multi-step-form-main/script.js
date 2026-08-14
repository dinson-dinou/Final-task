let currentStep = 0
let formData = {
	plan: "arcade",
	amount: 9,
	option: "monthly",
	addOns: [],
}
const subscriptions = [
	{
		id: 1,
		name: "Online Service",
		amount: 1,
	},
	{
		id: 2,
		name: "Larger storage",
		amount: 2,
	},
	{
		id: 3,
		name: "Customizable profile",
		amount: 2,
	},
]

const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("backBtn")

const stepItems = document.querySelectorAll(".steps__item")
const items = document.querySelectorAll(".step")

nextBtn.addEventListener("click", nextBtnClicked)
prevBtn.addEventListener("click", prevBtnClicked)

function nextBtnClicked(event) {
	for (let index = 0; index < stepItems.length - 1; index++) {
		const item = items[index]
		const stepItem = stepItems[index]
		if (index == currentStep) {
			currentStep++
			stepItem.classList.remove("active")
			stepItem.ariaHidden = true
			item.classList.remove("active")
			item.ariaHidden = true
			stepItems[currentStep].classList.add("active")
			stepItems[currentStep].ariaHidden = false
			items[currentStep].classList.add("active")
			items[currentStep].ariaHidden = false
			if (prevBtn.classList.contains("hidden")) {
				prevBtn.classList.remove("hidden")
			}
			if (currentStep == stepItems.length - 1) {
				nextBtn.innerHTML = "Confirm"
			}
			break
		}
	}
}

function prevBtnClicked(event) {
	for (let index = stepItems.length - 1; index >= 0; index--) {
		const item = items[index]
		const stepItem = stepItems[index]
		if (index == currentStep) {
			if (currentStep == stepItems.length - 1) {
				nextBtn.innerHTML = "Next Step"
			}
			currentStep--
			stepItem.classList.remove("active")
			stepItem.ariaHidden = true
			item.classList.remove("active")
			item.ariaHidden = true
			stepItems[currentStep].classList.add("active")
			stepItems[currentStep].ariaHidden = false
			items[currentStep].classList.add("active")
			items[currentStep].ariaHidden = false
			if (currentStep == 0) {
				prevBtn.classList.add("hidden")
			}

			break
		}
	}
}
