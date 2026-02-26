document.addEventListener('DOMContentLoaded', ()=>{
  // smooth scroll for local links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const target = document.querySelector(a.getAttribute('href'))
      if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}
    })
  })
  // contato form handler
  const contato = document.querySelector('#contato-form')
  if(contato){
    contato.addEventListener('submit', e=>{
      e.preventDefault()
      const nome = contato.querySelector('[name="nome"]').value.trim()
      const email = contato.querySelector('[name="email"]').value.trim()
      if(!nome || !email){
        alert('Por favor, preencha nome e email.')
        return
      }
      // simula envio
      contato.reset()
      const mensagem = document.createElement('div')
      mensagem.className = 'notice'
      mensagem.textContent = `Mensagem enviada com sucesso! Obrigado, ${nome}.`
      contato.parentElement.prepend(mensagem)
      setTimeout(()=>mensagem.remove(),5000)
    })
  }
  // matrícula: preencher select com parâmetro ?plano=
  const matricula = document.querySelector('#matricula-form')
  if(matricula){
    const params = new URLSearchParams(window.location.search)
    const plano = params.get('plano')
    if(plano){
      // tentar selecionar a opção correspondente
      const sel = matricula.querySelector('[name="plano"]')
      for(const opt of sel.options){
        if(opt.textContent.toLowerCase().includes(decodeURIComponent(plano).toLowerCase())){
          opt.selected = true; break
        }
      }
    }
    matricula.addEventListener('submit', e=>{
      e.preventDefault()
      const nome = matricula.querySelector('[name="nome"]').value.trim()
      const email = matricula.querySelector('[name="email"]').value.trim()
      const planoSel = matricula.querySelector('[name="plano"]').value
      if(!nome || !email){
        alert('Por favor, preencha nome e email.')
        return
      }
      matricula.reset()
      const mensagem = document.createElement('div')
      mensagem.className = 'notice'
      mensagem.textContent = `Matrícula enviada com sucesso para ${nome}! Plano: ${planoSel}`
      matricula.parentElement.prepend(mensagem)
      setTimeout(()=>mensagem.remove(),5000)
    })
  }
})

function irParaPlanos(){
  window.location.href = 'planos.html'
}
