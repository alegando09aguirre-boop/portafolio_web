function dowloadpdf(){
    const element=document.querySelector('#pdf-content');

    const otp={
        margin: [10,5,15,5],
        fillename: 'hoja_de_vida_Alejandro_Aguirre' ,
        image: {type:'jpeg', quality:1},
        html2canvas:{
            scale: 2,
            useCORDS: true,
            scrollY:0
        },
        jsPDF:{
            unit:'mm',
            format:'a4',
            orientation: 'portrait'
        },
    }
    html2pdf().set(otp).from(element).save();
}