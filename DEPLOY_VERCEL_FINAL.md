# 🚀 Deploy no Vercel - Passo a Passo

## ✅ Status Atual
- ✅ **GitHub**: Projeto enviado com sucesso!
- ✅ **Repositório**: https://github.com/emegs88/E.C.Hortolandiafutsal
- ⏳ **Vercel**: Pronto para deploy

---

## 📋 Passo a Passo para Deploy no Vercel

### 1. Acesse o Vercel
👉 https://vercel.com

### 2. Faça Login
- Clique em **"Sign Up"** ou **"Log In"**
- Escolha **"Continue with GitHub"**
- Autorize o Vercel a acessar sua conta GitHub

### 3. Importe o Projeto
1. No dashboard do Vercel, clique em **"Add New Project"**
2. Na lista de repositórios, encontre: **`emegs88/E.C.Hortolandiafutsal`**
3. Clique em **"Import"**

### 4. Configure o Projeto
O Vercel detectará automaticamente as configurações. Verifique:

- **Framework Preset**: `Other` ou `Vite` (não importa, é site estático)
- **Root Directory**: `./` (raiz)
- **Build Command**: (deixe vazio - não precisa build)
- **Output Directory**: (deixe vazio - arquivos na raiz)
- **Install Command**: (deixe vazio - não tem dependências)

### 5. Deploy!
1. Clique em **"Deploy"**
2. Aguarde 30-60 segundos
3. 🎉 **Seu site estará online!**

---

## 🌐 Após o Deploy

### URL do Site
Você receberá uma URL automática, tipo:
```
https://e-c-hortolandiafutsal.vercel.app
```

### Domínio Personalizado (Opcional)
1. No dashboard do Vercel, vá em **Settings** → **Domains**
2. Adicione seu domínio (ex: `prosperefutsal.com.br`)
3. Siga as instruções de DNS

---

## 🔄 Atualizações Automáticas

**Boa notícia!** 🎉

A partir de agora, **toda vez que você fizer push para o GitHub**, o Vercel atualizará o site automaticamente!

**Como funciona:**
1. Você faz alterações no código
2. `git add .`
3. `git commit -m "sua mensagem"`
4. `git push origin main`
5. ✨ O Vercel detecta e faz deploy automaticamente!

---

## 📝 Próximos Passos

### 1. Hospedar os Vídeos
- Consulte `HOSPEDAR_VIDEOS.md`
- Recomendação: Use YouTube (gratuito)
- Após hospedar, envie os links para atualizar o site

### 2. Testar o Site
- Acesse a URL do Vercel
- Teste todas as seções
- Verifique em mobile e desktop

### 3. Compartilhar
- Envie o link para potenciais patrocinadores
- Compartilhe nas redes sociais
- Adicione ao seu portfólio

---

## 🆘 Problemas Comuns

### Site não carrega
- Verifique se o `index.html` está na raiz do repositório
- Confira se todos os arquivos foram commitados

### Imagens não aparecem
- Verifique os caminhos das imagens (devem ser relativos: `./assets/...`)
- Confira se as pastas `assets/` estão no GitHub

### Vídeos não funcionam
- Os vídeos precisam ser hospedados externamente (YouTube, Vimeo)
- Veja `HOSPEDAR_VIDEOS.md` para instruções

### Erro de build
- Este projeto não precisa de build
- Se aparecer erro, configure:
  - Build Command: (vazio)
  - Output Directory: (vazio)

---

## ✅ Checklist Final

- [ ] Projeto no GitHub ✅
- [ ] Deploy no Vercel
- [ ] Site acessível online
- [ ] Testar todas as seções
- [ ] Hospedar vídeos (YouTube)
- [ ] Atualizar links dos vídeos no site
- [ ] Compartilhar com patrocinadores

---

## 🎉 Pronto!

Seu site está pronto para impressionar os patrocinadores! 🚀

**Dúvidas?** Consulte os outros arquivos `.md` na raiz do projeto.
