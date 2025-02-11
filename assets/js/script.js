const sobre = document.querySelector("#about");
const formulario = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 

async function getApiGithub() {
    try {
        const dadosPerfil = await fetch(`https://api.github.com/users/liamatsubara`); //pega os dados através da requisição

        //converter para json para virar um objeto
        const perfil = await dadosPerfil.json();

        let conteudo = `
        
            <img src="${perfil.avatar_url}" alt="Foto do Perfil do Github - ${perfil.name}">

            <article id="about_texto">

                <h1>Sobre Mim</h1>
                <p>Graduada em Rádio, TV e Internet, acumulo experiência na edição de vídeo e produção de acessibilidade para conteúdos audiovisuais. Atualmente, estou em transição de carreira para a área de tecnologia, cursando Análise e Desenvolvimento de Sistemas na Fatec e participando de um Bootcamp Full Stack JavaScript pela Generation.</p>
                
                <p>Durante essa jornada, desenvolvi e pratiquei lógica de programação, adquirindo experiência com linguagens e tecnologias como JavaScript, TypeScript, Node.js, Nest.js, SQL, Java, HTML, CSS e React. Além disso, tenho conhecimento em metodologias ágeis, como Scrum, e desenvolvi habilidades em gestão de tempo, trabalho em equipe e comunicação interpessoal, que me ajudam a lidar com projetos, aprender de forma constante e colaborar de maneira eficiente em diferentes situações.</p>

                <div id="about_github" class="flex sobre_github">
                    <a href="${perfil.html_url}" target="_blank" class="botao">
                        Github
                    </a>
                    <p>${perfil.followers} Seguidores</p>
                    <p>${perfil.public_repos} Repositórios</p>
                </div>

            </article>
        
        `;

        sobre.innerHTML += conteudo;

    } catch (error) {
        console.error(error);
    }
}

formulario.addEventListener("submit", function(event){
    event.preventDefault();

     // Validação do nome
    const campoNome = document.querySelector("#nome");
    const txtNome = document.querySelector("#txtNome");

    if(campoNome.value.length < 3){
        txtNome.innerHTML = "O nome deve ter no mínimo 3 caracteres";
        campoNome.focus();
        return;
    }else{
        txtNome.innerHTML = "";
    }

    // Validação do email
    const campoEmail = document.querySelector("#email");
    const txtEmail = document.querySelector("#txtEmail");

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = "Digite um e-mail válido.";
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML = "";
    }

    //  Validação do assunto
    const campoAssunto = document.querySelector("#assunto");
    const txtAssunto = document.querySelector("#txtAssunto");

    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = "O asssunto deve ter no mínimo 5 caracteres";
        campoAssunto.focus();
        return;
    }else{
        txtAssunto.innerHTML = "";
    }
    
    formulario.submit();

});

getApiGithub();