const takeInput=document.getElementById('insert')
window.addEventListener('keydown', (event)=>{
    takeInput.innerHTML=`
    <div class="color">
    <table>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${event.key}</td>
            <td>${event.keyCode}</td>
            <td>${event.code}</td>
        </tr>
    </table>
    </div>
    `
})