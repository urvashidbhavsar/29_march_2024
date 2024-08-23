$(window).on('load', function () {
    $.ajax({
        url: "https://fakestoreapiserver.reactbd.com/amazonproducts",
        type: "GET",
        success: function (responsive) {
            let html = "";
            for (let i = 0; i < responsive.length; i++) {
                const { id, title, price, description, category, image, rating } = responsive[i];
                html += `
                    <tr>
                        <td>${id}</td>
                        <td>${title}</td>
                        <td>&#8377;${price}</td>
                        <td>${description}</td>
                        <td>${category}</td>
                        <td><img src=${image}></td>
                        <td>${rating.rate}</td>
                        <td>${rating.count}</td>
                    </tr>  `
            }
            $("table").find("#data").append(html);
        },
    })
})