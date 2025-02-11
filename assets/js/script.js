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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur, libero suscipit tempora quam dolor quas similique blanditiis cupiditate et reiciendis? Sapiente veritatis officia sunt voluptatem sit qui corrupti voluptate!</p>

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