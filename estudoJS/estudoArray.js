var Cidades = ["São Paulo", "Recife", "Vitória", "Aracaju"];
        //var cidade = Cidades[2];
        //document.write("A cidade é " + cidade + ".");
        for (i = 0; i < 4; i++) {
            document.write(Cidades[i] + "<br\>");
        }
        Cidades[1] = "Paraty";
        for (i = 0; i < 4; i++) {
            document.write(Cidades[i] + "<br\>");
        }