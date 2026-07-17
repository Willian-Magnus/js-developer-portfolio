function AtualizaPerfil(perfil){
 const job = document.getElementById('profile.job')
 job.innerText = perfil.titulo

 const location = document.getElementById('profile.location')
 location.innerText = perfil.localidade

 const phone = document.getElementById('profile.phone')
 phone.innerText = perfil.telefone

 const email = document.getElementById('profile.email')
 email.innerText = perfil.email
}

function AtualizaSoftSkills(perfil){
const comunicacao = document.getElementById('softskill.comunicacao')
 comunicacao.innerText = perfil.skills.softSkills[0]
 const empatia = document.getElementById('softskill.empatia')
 empatia.innerText = perfil.skills.softSkills[1]

 const goleador = document.getElementById('softskill.goleador')
goleador.innerText = perfil.skills.softSkills[2]


}

function AtualizaHardSkills(perfil){
    const hardSkills = document.getElementById('profile.skills.hardSkills')
 
    hardSkills.innerHTML = perfil.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.nome}" title="${skill.nome}"></li>`).join('')
}

function AtualizaIdiomas(perfil){
    const idiomas = document.getElementById('Profile.idiomas')
       idiomas.innerHTML = perfil.idiomas.map(idioma => `<li>${idioma.nome}</li>`).join('')
}

function AtualizaSaudacao(perfil){
    const saudacao = document.getElementById('saudacao')
    saudacao.innerHTML = `Olá, <br> eu sou o ${perfil.nome}`
}

function AtualizaFoto(perfil){
    const foto = document.getElementById("foto")
    foto.src = perfil.foto.src
    foto.alt = perfil.foto.alt    
}
(async () =>{
    const perfil = await GetProfile()
    console.log(perfil)
   AtualizaPerfil(perfil)
   AtualizaSoftSkills(perfil)
   AtualizaHardSkills(perfil)
    AtualizaIdiomas(perfil)
    AtualizaSaudacao(perfil)
    AtualizaFoto(perfil)
   
})()