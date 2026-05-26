document.addEventListener("DOMContentLoaded", () => {

    const btnAbrir =
    document.getElementById("btn-abrir");

    const pantallaLibro =
    document.getElementById("pantalla-libro");

    const contenidoInvitacion =
    document.getElementById("contenido-invitacion");

    /* ABRIR LIBRO */

btnAbrir.addEventListener("click", () => {

        const libro =
        document.querySelector(".libro");

        libro.classList.add("libro-abierto");

        /* ---- MÚSICA ---- */
        /* PEGA AQUÍ TU ID DE YOUTUBE   */
        /* Ejemplo: si tu link es        */
        /* https://youtu.be/ABC123XYZ   */
        /* el ID es: ABC123XYZ          */

       const idCancion = "yIzyS9yrgag";

        const reproductor = document.createElement("iframe");
        reproductor.src =
            "https://www.youtube.com/embed/" +
            idCancion +
            "?autoplay=1&loop=1&playlist=" +
            idCancion +
            "&controls=0&showinfo=0";
        reproductor.allow = "autoplay";
        reproductor.style.cssText =
            "position:fixed;width:0;height:0;border:none;opacity:0;pointer-events:none;";
        document.body.appendChild(reproductor);
        /* ---- FIN MÚSICA ---- */

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
