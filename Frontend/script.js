const form = document.getElementById('form-tarefa');
const lista = document.getElementById('lista-tarefas');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const descricao = document.getElementById('descricao').value;
  const vencimento = document.getElementById('vencimento').value;

  const novaTarefa = {
    title: titulo,
    description: descricao,
    dueDate: vencimento,
  };

  try {
    await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novaTarefa),
    });

    carregarTarefas();
    form.reset();
  } catch (err) {
    alert('Erro ao adicionar tarefa.');
  }
});

async function carregarTarefas() {
  lista.innerHTML = '';
  const res = await fetch('http://localhost:3000/tasks');
  const tarefas = await res.json();

  function formatarData(dataISO) {
    const [ano, mes, dia] = dataISO.split('-');
    return `${dia}/${mes}/${ano}`;
  }

  tarefas.forEach((tarefa) => {
    const li = document.createElement('li');
    li.setAttribute('data-id', tarefa.id);
    if (tarefa.completed) {
      li.classList.add('tarefa-concluida');
    }
    li.innerHTML = `
    <div class="info">
      <p><strong>titulo: </strong> ${tarefa.title}</p>
      <p><strong>Descrição:</strong> ${tarefa.description}</p>
      <p><strong>Vence em:</strong> ${formatarData(tarefa.dueDate)}</p>
    </div>
    <div class="acoes">
      <button class="btn-check" onclick="concluirTarefa(${tarefa.id})"><i class="fas fa-check"></i></button>
      <button class="btn-edit" onclick="editarTarefa(${tarefa.id}, '${tarefa.title}', '${tarefa.description}', '${tarefa.dueDate}')">
          <i class="fas fa-pen"></i>
      </button>
      <button class="btn-trash" onclick="removerTarefa(${tarefa.id})"><i class="fas fa-trash"></i></button>
    </div>
  `;

    lista.appendChild(li);
  });
}

function editarTarefa(id, tituloAntigo, descricaoAntiga, dataAntiga) {
  const li = document.querySelector(`li[data-id='${id}']`);
  if (!li) return;

  li.innerHTML = `
    <form class="form-edicao" onsubmit="salvarEdicao(event, ${id})">
      <input type="text" name="titulo" value="${tituloAntigo}" required />
      <input type="text" name="descricao" value="${descricaoAntiga}" required />
      <input type="date" name="vencimento" value="${dataAntiga}" required />
      <div class="acoes">
        <button class="btn-check" type="submit"><i class="fas fa-check"></i></button>
        <button class="btn-trash" type="button" onclick="carregarTarefas()"><i class="fas fa-xmark"></i></button>
      </div>
    </form>
  `;
}

function salvarEdicao(e, id) {
  e.preventDefault();
  const form = e.target;
  const titulo = form.titulo.value;
  const descricao = form.descricao.value;
  const vencimento = form.vencimento.value;

  fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: titulo, description: descricao, dueDate: vencimento }),
  })
    .then(() => {
      alert('Tarefa atualizada!');
      carregarTarefas();
    })
    .catch(() => alert('Erro ao editar tarefa.'));
}

async function concluirTarefa(id) {
  await fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: true }),
  });
  carregarTarefas();
}

async function removerTarefa(id) {
  await fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'DELETE',
  });
  carregarTarefas();
}

carregarTarefas();
