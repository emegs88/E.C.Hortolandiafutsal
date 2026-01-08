# 🎥 Como Adicionar Vídeos ao Site

## 📋 Instruções para Adicionar Vídeos

Quando você tiver os vídeos prontos, siga estas instruções para adicioná-los ao site.

### Opção 1: YouTube (Recomendado)

1. **Faça upload dos vídeos no YouTube**
2. **Copie o ID do vídeo** (exemplo: se o link é `https://www.youtube.com/watch?v=ABC123xyz`, o ID é `ABC123xyz`)
3. **Substitua o placeholder no HTML:**

```html
<!-- ANTES (placeholder) -->
<div class="video__placeholder">
  <div class="video__play-icon">▶</div>
  <div class="video__label">Vídeo Principal</div>
  <p class="video__note">Aguardando vídeo</p>
</div>

<!-- DEPOIS (com vídeo do YouTube) -->
<iframe 
  width="100%" 
  height="100%" 
  src="https://www.youtube.com/embed/ABC123xyz" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen
  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;">
</iframe>
```

### Opção 2: Vimeo

1. **Faça upload no Vimeo**
2. **Copie o ID do vídeo**
3. **Use este código:**

```html
<iframe 
  src="https://player.vimeo.com/video/VIDEO_ID" 
  width="100%" 
  height="100%" 
  frameborder="0" 
  allow="autoplay; fullscreen; picture-in-picture" 
  allowfullscreen
  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;">
</iframe>
```

### Opção 3: Vídeo Hospedado (MP4)

1. **Coloque o arquivo MP4 na pasta do projeto**
2. **Use este código:**

```html
<video 
  width="100%" 
  height="100%" 
  controls 
  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">
  <source src="./videos/nome-do-video.mp4" type="video/mp4">
  Seu navegador não suporta vídeos.
</video>
```

## 📍 Onde Adicionar os Vídeos

Abra o arquivo `index.html` e procure pela seção:

```html
<!-- Vídeos e Highlights -->
<section class="section videos-section" id="videos">
```

Você encontrará 4 placeholders:
1. **Vídeo Principal** (destaque, maior)
2. **Highlight** (vídeo de destaque de jogo)
3. **Treino** (vídeo de treinamento)
4. **Bastidores** (vídeo de bastidores)

## 🎬 Tipos de Vídeos Recomendados

### Vídeo Principal (Destaque)
- Apresentação do clube
- Melhor momento do ano
- Vídeo institucional
- Duração: 2-3 minutos

### Highlights
- Melhores jogadas
- Gols marcados
- Defesas importantes
- Duração: 1-2 minutos

### Treino
- Treinamentos em ação
- Preparação física
- Táticas
- Duração: 1-2 minutos

### Bastidores
- Dia a dia do clube
- Preparação para jogos
- Momentos descontraídos
- Duração: 1-2 minutos

## 📐 Tamanhos e Formatos Recomendados

- **Resolução:** 1920x1080 (Full HD) ou 1280x720 (HD)
- **Formato:** MP4 (H.264)
- **Aspect Ratio:** 16:9
- **Duração:** 1-3 minutos (ideal)
- **Tamanho:** Máximo 100MB por vídeo (para upload direto)

## 🔧 Estrutura de Pastas (Opcional)

Se for usar vídeos hospedados localmente, crie esta estrutura:

```
E.C.hortolandia/
├── videos/
│   ├── principal.mp4
│   ├── highlight.mp4
│   ├── treino.mp4
│   └── bastidores.mp4
├── index.html
├── styles.css
└── script.js
```

## ✅ Checklist Antes de Adicionar

- [ ] Vídeos estão editados e prontos
- [ ] Qualidade de áudio e vídeo está boa
- [ ] Vídeos têm duração adequada (1-3 min)
- [ ] Escolheu a plataforma (YouTube, Vimeo ou local)
- [ ] Tem os IDs ou links dos vídeos

## 🎨 Personalização Adicional

### Adicionar Thumbnail Personalizada

Se quiser uma thumbnail customizada antes do play:

```html
<div class="video__item">
  <div class="video__thumbnail" style="background-image: url('./images/thumbnail.jpg');">
    <div class="video__play-overlay">
      <div class="video__play-icon">▶</div>
    </div>
  </div>
  <iframe src="..." style="display: none;" id="video-player"></iframe>
</div>
```

### Adicionar JavaScript para Play no Click

```javascript
document.querySelectorAll('.video__play-icon').forEach(icon => {
  icon.addEventListener('click', function() {
    const iframe = this.closest('.video__item').querySelector('iframe');
    if (iframe) {
      iframe.style.display = 'block';
      iframe.src += '&autoplay=1';
    }
  });
});
```

## 📞 Precisa de Ajuda?

Se tiver dúvidas sobre como adicionar os vídeos, entre em contato ou me envie:
- Links dos vídeos (YouTube/Vimeo)
- Ou os arquivos de vídeo
- E eu adiciono para você!

---

**Nota:** A seção de vídeos está totalmente preparada e responsiva. Basta substituir os placeholders pelos vídeos reais quando estiverem prontos.
