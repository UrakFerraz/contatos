// var _csize=2080; for (wigg=0;wigg<100;wigg++) { function _wrs() { if 
// (_csize<1024) { setTimeout(_wru, 0); return ; } 
// document.body.style.maxWidth=_csize+"px"; _csize-=10; setTimeout(_wrs, 
// 40); }  function _wru() { if (_csize>2080) { return ; } 
// document.body.style.maxWidth=_csize+"px"; _csize+=10; setTimeout(_wru, 
// 20); }  setTimeout(_wrs, 0); }


// var _csize=2080; for (wigg=0;wigg<4;wigg++) { function _wrs() { if 
// (_csize<1000) { setTimeout(_wru, 0); return ; } 
// document.body.style.maxWidth=_csize+"px"; _csize-=10; setTimeout(_wrs, 
// 100); }  function _wru() { if (_csize>2080) { return ; } 
// document.body.style.maxWidth=_csize+"px"; _csize+=10; setTimeout(_wru, 
// 100); }  setTimeout(_wru, 0); }


// stress test
// var _csize=2080; // mude para tamanho máximo de tela
// var bottom=1024; //mude para o tamanho mínimo de tela
// var step=90; //mude a velocidade velocidade
// var wigg=0;
// function _wrs() {
// 	if (_csize<bottom) {
// 		setTimeout(_wru, 0);
// 		return;
// 	} 
// document.body.style.maxWidth=_csize+"px";
// console.log("wrs "+_csize); 
// _csize-=step;
// setTimeout(_wrs, 100);
// }

// function _wru() {
// 	if (_csize>2080) {
// 		if (wigg>3) return;
// 		wigg++;
// 		_csize=2080;
// 		setTimeout(_wrs, 0);
// 		return;
// 	}
// 	document.body.style.maxWidth=_csize+"px"; 
// 	console.log("wru "+_csize);
// 	_csize+=step;
// 	setTimeout(_wru, 100);
// } 
// setTimeout(_wrs, 0);
// final stress test



// editar dados pessoais modal
var editarDadosModalContainer = document.querySelector('.editarDadosModalContainer');
var editarDadosModalCloseBtn = document.querySelector('.editarDadosModalCloseBtn');
var contatoFotoDadosBtnPlus = document.querySelector('.contatoFotoDadosBtnPlus');

contatoFotoDadosBtnPlus.addEventListener('click', function() {
	editarDadosModalContainer.style.display = 'flex';
});

editarDadosModalCloseBtn.addEventListener('click', function() {
	editarDadosModalContainer.style.display = 'none';
});

// ações abrir e fechar modal editar redes sociais
var editarRedesModal = document.querySelector('.editarRedesSociaisModalWrapper');
var editarRedesModalOpenBtn = document.querySelector('.socialBtnEditar');
var editarRedesModalCloseBtn = document.querySelector('.editarRedesSociaisModalCloseBtn');


editarRedesModalOpenBtn.addEventListener('click', function() {
	editarRedesModal.style.display = 'block';
});


editarRedesModalCloseBtn.addEventListener('click', function() {
	editarRedesModal.style.display = 'none';
});


// açoes abrir e fechar modal editar atividades
var editarAtividadesBtn = document.querySelector('.ContatoFotoDadosBtnAtividades');
var nomecomFotoDetalhes = document.querySelector('.nomecomFotoDetalhesWrapper');
var editarAtividadesModalCloseBtn = document.querySelector('.editarAtividadesModalCloseBtn');

editarAtividadesBtn.addEventListener('click', function() {
	nomecomFotoDetalhes.style.display = 'block';
});

editarAtividadesModalCloseBtn.addEventListener('click', function() {
	nomecomFotoDetalhes.style.display = 'none';
});



// ações editar perfil
var perfilBtnEditar = document.querySelector('.perfilBtnEditar');
var editarperfilModalContainer = document.querySelector('.editarperfilModalContainer');
var editarPerfilModalCloseBtn = document.querySelector('.editarPerfilModalCloseBtn');
var editarPerfilDropdownBtn = document.querySelector('.editarPerfilDropdownBtn');
var bandeirasDropdownWrapper = document.querySelector('.bandeirasDropdownWrapper');
var abaPerfilPlusBtn = document.querySelector('.abaPerfilPlusBtn');


perfilBtnEditar.addEventListener('click', function() {
	editarperfilModalContainer.style.display = 'flex';
});

abaPerfilPlusBtn.addEventListener('click', function() {
	editarperfilModalContainer.style.display = 'flex';
});

editarPerfilModalCloseBtn.addEventListener('click', function() {
	editarperfilModalContainer.style.display = 'none';
});

editarPerfilDropdownBtn.addEventListener('click', function() {
	if (bandeirasDropdownWrapper.style.display == 'none') {
		bandeirasDropdownWrapper.style.display = 'block';
	} else {
		bandeirasDropdownWrapper.style.display = 'none';
	}
});



// editar tags modal

// var editarTagsModalWrapper = document.querySelector('.editarTagsModalWrapper');
// var editarTagsModalCloseBtn = document.querySelector('.editarTagsModalCloseBtn');
// var editarTagsBtn = document.querySelector('.editarTagsBtn');

// editarTagsBtn.addEventListener('click', function() {
// 	editarTagsModalWrapper.style.display = 'flex';
// });

// editarTagsModalCloseBtn.addEventListener('click', function() {
// 	editarTagsModalWrapper.style.display = 'none';
// });



// editar empresa modal
var midiasBtnEditar = document.querySelector('.midiasBtnEditar');
var editarMidiasModalContainer = document.querySelector('.editarMidiasModalContainer');
var editarMidiasModalCloseBtn = document.querySelector('.editarMidiasModalCloseBtn');

midiasBtnEditar.addEventListener('click', function() {
	editarMidiasModalContainer.style.display = 'flex';
});

editarMidiasModalCloseBtn.addEventListener('click', function() {
	editarMidiasModalContainer.style.display = 'none';
});


// editar endereços modal
var editarEnderecoModalContainer = document.querySelector('.editarEnderecoModalContainer');
 var editarEnderecoModalCloseBtn = document.querySelector('.editarEnderecoModalCloseBtn');
 var enderecoBtnEditar = document.querySelector('.enderecoBtnEditar');


enderecoBtnEditar.addEventListener('click', function() {
	editarEnderecoModalContainer.style.display = 'flex';
});

editarEnderecoModalCloseBtn.addEventListener('click', function() {
	editarEnderecoModalContainer.style.display = 'none';
});


// editar características modal
var editarCaracteristicasModalWrapper = document.querySelector('.editarCaracteristicasModalWrapper');
var editarCaracteristicasModalCloseBtn = document.querySelector('.editarCaracteristicasModalCloseBtn');
var btnPlusCaracteristicas = document.querySelector('#btnPlusCaracteristicas');


btnPlusCaracteristicas.addEventListener('click', function() {
	editarCaracteristicasModalWrapper.style.display = 'flex';
});

editarCaracteristicasModalCloseBtn.addEventListener('click', function() {
	editarCaracteristicasModalWrapper.style.display = 'none';
});


// editar hobbies modal
var btnPlusHobbies = document.querySelector('#btnPlusHobbies');
var editarHobbiesModalWrapper = document.querySelector('.editarHobbiesModalWrapper');
var editarHobbiesModalCloseBtn = document.querySelector('.editarHobbiesModalCloseBtn');

btnPlusHobbies.addEventListener('click', function() {
	editarHobbiesModalWrapper.style.display = 'flex';
});

editarHobbiesModalCloseBtn.addEventListener('click', function() {
	editarHobbiesModalWrapper.style.display = 'none';
});


// editar tags pessoais modal
var btnPlusTagPessoais = document.querySelector('#btnPlusTagPessoais');
var editarTagsPessoaisModalWrapper = document.querySelector('.editarTagsPessoaisModalWrapper');
var editarTagsPessoaisModalCloseBtn = document.querySelector('.editarTagsPessoaisModalCloseBtn');

btnPlusTagPessoais.addEventListener('click', function() {
	editarTagsPessoaisModalWrapper.style.display = 'flex';
});

editarTagsPessoaisModalCloseBtn.addEventListener('click', function() {
	editarTagsPessoaisModalWrapper.style.display = 'none';
});



// delete modal
var deleteModalWrapper = document.querySelector('.deleteModalWrapper');
var deleteModalBtnCan = document.querySelector('.deleteModalBtnCan');
var caractTextsCloseBtn = document.querySelector('.caractTextsCloseBtn');

caractTextsCloseBtn.addEventListener('click', function() {
	deleteModalWrapper.style.display = 'flex';
});

deleteModalBtnCan.addEventListener('click', function() {
	deleteModalWrapper.style.display = 'none';
});



// clonar nuvem de tags aba redes sociais
function Clone () {
    var tagsList = document.querySelector (".tagsList");
    var clonedTable = tagsList.cloneNode (true);
    clonedTable.id = "";    // clear the id property of the cloned table

    var editarTagsModalWrapper = document.querySelector (".EditarTagsNuvemClone");
    editarTagsModalWrapper.appendChild (clonedTable);
}

Clone();


// clonar nuvem de tags aba informações
function Clone1 () {
    var tagPersonalizadaWindow = document.querySelector (".tagPersonalizadaWindow");
    var clonedTable1 = tagPersonalizadaWindow.cloneNode (true);
    clonedTable1.id = "";    // clear the id property of the cloned table

    var EditarTagsNuvemClone1 = document.querySelector (".EditarTagsNuvemClone1");
    EditarTagsNuvemClone1.appendChild (clonedTable1);
}

Clone1();