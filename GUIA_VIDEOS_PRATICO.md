# 🎥 Guia Prático - Como Importar Vídeos

## 📍 Localização dos Vídeos no Código

Os vídeos estão na seção que começa na linha ~810 do arquivo `index.html`.

Procure por: `<!-- Vídeos e Highlights -->`

## 🎬 Método 1: YouTube (MAIS FÁCIL - Recomendado)

### Passo 1: Fazer Upload no YouTube
1. Acesse https://www.youtube.com
2. Clique em "Criar" → "Enviar vídeo"
3. Faça upload do seu vídeo
4. Aguarde o processamento

### Passo 2: Copiar o ID do Vídeo
- Se o link do vídeo é: `https://www.youtube.com/watch?v=ABC123xyz`
- O ID é: `ABC123xyz` (parte depois de `v=`)

### Passo 3: Substituir no Código

**ENCONTRE ESTE CÓDIGO:**
```html
<div class="video__item video__item--featured">
  <div class="video__placeholder">
    <div class="video__play-icon">▶</div>
    <div class="video__label">Vídeo Principal</div>
    <p class="video__note">Aguardando vídeo</p>
  </div>
</div>
```

**SUBSTITUA POR:**
```html
<div class="video__item video__item--featured">
  <iframe 
    width="100%" 
    height="100%" 
    src="https://www.youtube.com/embed/ABC123xyz" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;">
  </iframe>
</div>
```

**⚠️ IMPORTANTE:** Substitua `ABC123xyz` pelo ID real do seu vídeo!

---

## 🎬 Método 2: Vimeo

### Passo 1: Upload no Vimeo
1. Acesse https://vimeo.com
2. Faça upload do vídeo
3. Copie o ID do vídeo

### Passo 2: Substituir no Código

**SUBSTITUA O PLACEHOLDER POR:**
```html
<div class="video__item video__item--featured">
  <iframe 
    src="https://player.vimeo.com/video/VIDEO_ID_AQUI" 
    width="100%" 
    height="100%" 
    frameborder="0" 
    allow="autoplay; fullscreen; picture-in-picture" 
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;">
  </iframe>
</div>
```

---

## 🎬 Método 3: Vídeo Local (MP4)

### Passo 1: Criar Pasta de Vídeos
No terminal, dentro da pasta do projeto:
```bash
mkdir videos
```

### Passo 2: Colocar Vídeos na Pasta
Coloque seus arquivos MP4 na pasta `videos/`:
- `videos/principal.mp4`
- `videos/highlight.mp4`
- `videos/treino.mp4`
- `videos/bastidores.mp4`

### Passo 3: Substituir no Código

**SUBSTITUA O PLACEHOLDER POR:**
```html
<div class="video__item video__item--featured">
  <video 
    width="100%" 
    height="100%" 
    controls 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">
    <source src="./videos/principal.mp4" type="video/mp4">
    Seu navegador não suporta vídeos.
  </video>
</div>
```

---

## 📝 Exemplo Completo - 4 Vídeos do YouTube

Aqui está um exemplo completo de como ficaria com 4 vídeos do YouTube:

```html
<div class="videos__grid">
  <!-- Vídeo Principal (Destaque) -->
  <div class="video__item video__item--featured">
    <iframe 
      width="100%" 
      height="100%" 
      src="https://www.youtube.com/embed/VIDEO_ID_1" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;">
    </iframe>
  </div>

  <!-- Highlight -->
  <div class="video__item">
    <iframe 
      width="100%" 
      height="100%" 
      src="https://www.youtube.com/embed/VIDEO_ID_2" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;">
    </iframe>
  </div>

  <!-- Treino -->
  <div class="video__item">
    <iframe 
      width="100%" 
      height="100%" 
      src="https://www.youtube.com/embed/VIDEO_ID_3" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;">
    </iframe>
  </div>

  <!-- Bastidores -->
  <div class="video__item">
    <iframe 
      width="100%" 
      height="100%" 
      src="https://www.youtube.com/embed/VIDEO_ID_4" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;">
    </iframe>
  </div>
</div>
```

---

## 🔍 Como Encontrar o ID do Vídeo do YouTube

### Opção 1: Do Link
- Link completo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID: `dQw4w9WgXcQ`

### Opção 2: Link Curto
- Link: `https://youtu.be/dQw4w9WgXcQ`
- ID: `dQw4w9WgXcQ` (parte depois da última barra)

### Opção 3: Link Embed
- Link: `https://www.youtube.com/embed/dQw4w9WgXcQ`
- ID: `dQw4w9WgXcQ`

---

## ✅ Checklist Rápido

- [ ] Vídeo está no YouTube/Vimeo OU arquivo MP4 pronto
- [ ] Tenho o ID do vídeo (se YouTube/Vimeo)
- [ ] Abri o arquivo `index.html`
- [ ] Encontrei a seção `<!-- Vídeos e Highlights -->`
- [ ] Substituí os 4 placeholders pelos vídeos
- [ ] Salvei o arquivo
- [ ] Testei no navegador

---

## 🚀 Dica: Autoplay (Opcional)

Se quiser que o vídeo comece automaticamente ao carregar (sem som):

Adicione `&autoplay=1&mute=1` no final do link:
```html
src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1"
```

---

## 📞 Precisa de Ajuda?

**Opção 1:** Me envie os links dos vídeos (YouTube/Vimeo) e eu adiciono para você!

**Opção 2:** Me envie os arquivos MP4 e eu configuro tudo.

**Opção 3:** Siga este guia passo a passo.

---

## 🎯 Resumo Ultra Rápido

1. **YouTube:** Pegue o ID do vídeo → Substitua `VIDEO_ID` no código
2. **Vimeo:** Pegue o ID do vídeo → Substitua `VIDEO_ID` no código  
3. **MP4 Local:** Coloque na pasta `videos/` → Use `<video>` tag

**Pronto!** 🎉
