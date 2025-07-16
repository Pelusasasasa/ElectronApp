const informacion = document.getElementById('info');

const func = async() => {
    const response = await window.versions.ping();
    console.log(response);
};

func();

informacion.innerText = `Esta aplicacion esta usando Crhome (v${versions.chrome()}), Node.js (v${versions.node()}), And Electron (v${versions.electron()})`