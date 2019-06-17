var modalTipoContatoWrapper = document.querySelector('.modalTipoContatoWrapper');
var selecionarContatoModalCloseBtn = document.querySelector('.selecionarContatoModalCloseBtn');
var contatoTemplateBlock = document.querySelector('.contatoTemplateBlock ');
var novoContatoBtn = document.querySelector('.novoContatoBtn ');


novoContatoBtn.addEventListener('click', function() {
	modalTipoContatoWrapper.style.display = 'block';
});


selecionarContatoModalCloseBtn.addEventListener('click', function() {
	modalTipoContatoWrapper.style.display = 'none';
});


contatoTemplateBlock.addEventListener('click', function() {
	modalTipoContatoWrapper.style.display = 'none';
});