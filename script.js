const form=document.getElementById('chatForm');
const chat=document.getElementById('chat');
form.addEventListener('submit',e=>{
e.preventDefault();
const input=document.getElementById('prompt');
const text=input.value.trim();
if(!text) return;
chat.innerHTML += `<div class="message"><strong>You:</strong> ${text}</div>`;
chat.innerHTML += `<div class="message ai"><strong>Hidden AI:</strong> This is a demo. Connect an AI API (OpenAI, Gemini, etc.) to get real responses.</div>`;
input.value='';
chat.scrollTop=chat.scrollHeight;
});
