var data_info;

        $(document).ready(function () {
            $("#btn").click(function () {
                $.ajax({
                    url: "https://randomuser.me/api/?randomparam=",
                    dataType: "json",
                    method: "GET",
                    success: function (data) {
                        data_info = data;
                        llenarDatos(data);
                        console.log(data);
                    },
                });
            });

            function llenarDatos(data) {
                $(".container").addClass('visible');
                var newRow = $("<tr>");
                newRow.append("<td>" + data.results[0].name.first + "</td>");
                newRow.append("<td>" + data.results[0].name.last + "</td>");
                newRow.append("<td>" + data.results[0].email + "</td>");
                newRow.append("<td>" + data.results[0].gender + "</td>");
                newRow.append("<td><img src='" + data.results[0].picture.medium + "' alt=''></td>");
                $("h1").addClass('visible');
                $("#usuariosTable tbody").append(newRow).closest('.bordered').addClass('visible');

            }
        });