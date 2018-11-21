$(document).ready(() => {
	a();
})

function a() {
	$("#search").on("click", () => {
		let searchTerm = $("#searchTerm").val();
		let url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm}&format=json&callback=?`;
		$.ajax({
			type: "GET",
			url,
			async: false,
			dataType: "json",
			success(data) {
					$("#output").empty();
					if(data[1].length !== 0) {
						for(let i = 0; i < data[1].length; i++){
							$("#output").prepend(`<div><a href = ${data[3][i]}><h2 style = 'color: orange;'>
																 ${data[1][i]}</h2></a><p> 
																 ${data[2][i]}</p></div><hr>`);
						}
					}else {
						$("#output").prepend("<h1 style = 'color: red; text-align: center;'>Error 404 &#9785<h1>");
					}	
			},
			error(errorMessage) {
				$("#output").html(errorMessage);
			}
		})
	})
}