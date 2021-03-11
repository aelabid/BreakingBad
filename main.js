async function get(){
	const response = await fetch("https://www.breakingbadapi.com/api/characters");
	const data = await response.json();
	print(data);

}

function print(data) {
	const selectD = document.querySelector("#select");

	const opt = `<select class='selectClss' onchange="picture(this.value)">
					<option>Select Actor</option>
					${data.map(x => `<option>${x.name}</option>`)}
				</select>`;

	selectD.innerHTML = opt;
}

async function picture(value) {
	const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${value}`);
	const data = await response.json();

	document.querySelector('#img').innerHTML = `
	<h3>${data[0].name}</h3>
	<img src='${data[0].img}'>
	`;
}
get();