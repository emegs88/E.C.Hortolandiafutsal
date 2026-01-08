# 🚀 Guia de Deploy - GitHub e Vercel

## 📋 Pré-requisitos

1. Conta no [GitHub](https://github.com)
2. Conta no [Vercel](https://vercel.com)

---

## 🔵 Deploy no GitHub

### Passo 1: Criar repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"** (ou **"+"** → **"New repository"**)
3. Preencha:
   - **Repository name**: `prospere-hortolandia-futsal` (ou o nome que preferir)
   - **Description**: "Site de patrocínio Prospere Hortolândia Futsal 2026"
   - **Visibility**: Public ou Private (sua escolha)
   - **NÃO marque** "Initialize with README" (já temos arquivos)
4. Clique em **"Create repository"**

### Passo 2: Conectar repositório local ao GitHub

Execute os seguintes comandos no terminal (substitua `SEU_USUARIO` pelo seu username do GitHub):

```bash
# Adicionar o repositório remoto
git remote add origin https://github.com/SEU_USUARIO/prospere-hortolandia-futsal.git

# Renomear branch para main (se necessário)
git branch -M main

# Fazer push para o GitHub
git push -u origin main
```

**OU** se você já tem SSH configurado:

```bash
git remote add origin git@github.com:SEU_USUARIO/prospere-hortolandia-futsal.git
git branch -M main
git push -u origin main
```

---

## ⚡ Deploy no Vercel

### Opção 1: Deploy via GitHub (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em **"Add New Project"**
4. Selecione o repositório `prospere-hortolandia-futsal`
5. Configure:
   - **Framework Preset**: Other (ou deixe em auto-detect)
   - **Root Directory**: `./` (raiz do projeto)
   - **Build Command**: (deixe vazio - site estático)
   - **Output Directory**: (deixe vazio)
6. Clique em **"Deploy"**

### Opção 2: Deploy via CLI

1. Instale a CLI da Vercel:
   ```bash
   npm i -g vercel
   ```

2. No diretório do projeto, execute:
   ```bash
   vercel
   ```

3. Siga as instruções:
   - Faça login na Vercel
   - Confirme o projeto
   - Deploy automático!

---

## 🔄 Atualizações Futuras

Para atualizar o site após fazer mudanças:

```bash
# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Descrição das mudanças"

# Enviar para GitHub
git push origin main
```

**Nota**: Se você conectou o Vercel ao GitHub, o deploy será automático a cada push!

---

## 📝 Configurações Importantes

### Vercel - Configurações do Projeto

No painel do Vercel, configure:

- **Framework**: Other
- **Build Command**: (vazio)
- **Output Directory**: (vazio)
- **Install Command**: (vazio)

### Domínio Personalizado (Opcional)

1. No painel do Vercel, vá em **Settings** → **Domains**
2. Adicione seu domínio personalizado
3. Siga as instruções de DNS

---

## ✅ Checklist

- [ ] Repositório criado no GitHub
- [ ] Código enviado para GitHub
- [ ] Projeto criado no Vercel
- [ ] Deploy realizado com sucesso
- [ ] Site acessível via URL da Vercel
- [ ] Links de redes sociais funcionando
- [ ] Imagens carregando corretamente

---

## 🆘 Problemas Comuns

### Erro: "Repository not found"
- Verifique se o nome do repositório está correto
- Confirme que você tem permissão de acesso

### Erro: "Authentication failed"
- Verifique suas credenciais do GitHub
- Use token de acesso pessoal se necessário

### Site não carrega imagens
- Verifique se os caminhos das imagens estão corretos
- Use caminhos relativos (ex: `./assets/...`)

---

## 📞 Suporte

Se tiver problemas, verifique:
- [Documentação do GitHub](https://docs.github.com)
- [Documentação da Vercel](https://vercel.com/docs)
