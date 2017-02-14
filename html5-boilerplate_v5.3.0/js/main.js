function submitMovie() {
	var textInput= document.getElemntById('textInput')
	var move= textInput.value;

	var movieList = document.getElemntById('movieList');
	console.log(movieList)

	var listItem= document.creatElement("Li");
	var movieNode= document.createTextNode(movie);
	listItem.appendChild(movieNode)
	movieList.appendChild(listItem)

}