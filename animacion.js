document.addEventListener("DOMContentLoaded", () => {

    const btnAbrir =
    document.getElementById("btn-abrir");

    const pantallaLibro =
    document.getElementById("pantalla-libro");

    const contenidoInvitacion =
    document.getElementById("contenido-invitacion");

    /* ABRIR LIBRO */

    btnAbrir.addEventListener("click", () => {

        document
        .querySelector(".libro")
        .classList
        .add("libro-abierto");

        setTimeout(() => {

            pantallaLibro.style.opacity = "0";

            pantallaLibro.style.visibility = "hidden";

            contenidoInvitacion
            .classList
            .remove("invitacion-oculta");

            contenidoInvitacion
            .classList
            .add("invitacion-visible");

        }, 4200);

    });

    /* CUENTA REGRESIVA */

    const fechaEvento =
    new Date(
        2026,
        6,
        19,
        19,
        0,
        0
    ).getTime();

    const actualizarReloj =
    setInterval(() => {

        const ahora =
        new Date().getTime();

        const distancia =
        fechaEvento - ahora;

        const dias =
        Math.floor(
            distancia /
            (1000 * 60 * 60 * 24)
        );

        const horas =
        Math.floor(
            (
                distancia %
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            ) /
            (
                1000 *
                60 *
                60
            )
        );

        const minutos =
        Math.floor(
            (
                distancia %
                (
                    1000 *
                    60 *
                    60
                )
            ) /
            (
                1000 *
                60
            )
        );

        const segundos =
        Math.floor(
            (
                distancia %
                (
                    1000 *
                    60
                )
            ) / 1000
        );

        document.getElementById("dias").innerText =
        dias < 10 ? "0" + dias : dias;

        document.getElementById("horas").innerText =
        horas < 10 ? "0" + horas : horas;

        document.getElementById("minutos").innerText =
        minutos < 10 ? "0" + minutos : minutos;

        document.getElementById("segundos").innerText =
        segundos < 10 ? "0" + segundos : segundos;

        if (distancia < 0) {

            clearInterval(actualizarReloj);

            document.getElementById("reloj").innerHTML =
            "<h3>¡Hoy es el gran día!</h3>";
        }

    }, 1000);

    /* APARICIÓN AL BAJAR */

    const secciones =
    document.querySelectorAll(".seccion");

    const mostrarSecciones = () => {

        secciones.forEach((sec) => {

            const top =
            sec.getBoundingClientRect().top;

            if (
                top <
                window.innerHeight - 100
            ) {

                sec.classList.add("seccion-visible");

            }

        });

    };

    window.addEventListener(
        "scroll",
        mostrarSecciones
    );

    mostrarSecciones();

});