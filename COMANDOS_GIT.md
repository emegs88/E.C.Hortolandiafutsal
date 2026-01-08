# 🚀 Comandos para Deploy

## ✅ Repositório Git Inicializado!

O repositório local já está pronto. Agora siga estes passos:

---

## 📤 1. Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Nome do repositório: `prospere-hortolandia-futsal` (ou outro nome)
3. **NÃO marque** "Initialize with README"
4. Clique em **"Create repository"**

---

## 🔗 2. Conectar ao GitHub

**Substitua `SEU_USUARIO` pelo seu username do GitHub:**

```bash
# Adicionar repositório remoto
git remote add origin https://github.com/SEU_USUARIO/prospere-hortolandia-futsal.git

# Renomear branch para main
git branch -M main

# Enviar código para GitHub
git push -u origin main
```

**Se pedir autenticação:**
- Use um **Personal Access Token** do GitHub
- Ou configure SSH

---

## ⚡ 3. Deploy no Vercel

### Opção A: Via GitHub (Mais Fácil)

1. Acesse: https://vercel.com/new
2. Faça login com GitHub
3. Selecione o repositório `prospere-hortolandia-futsal`
4. Configure:
   - **Framework Preset**: Other
   - **Build Command**: (deixe vazio)
   - **Output Directory**: (deixe vazio)
5. Clique em **"Deploy"**

### Opção B: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# No diretório do projeto
vercel

# Siga as instruções
```

---

## 🔄 Atualizações Futuras

```bash
git add .
git commit -m "Descrição da atualização"
git push origin main
```

**Nota**: Se conectou Vercel ao GitHub, o deploy é automático!

---

## 📋 Status Atual

✅ Repositório Git inicializado
✅ Arquivos commitados
✅ .gitignore configurado
⏳ Aguardando conexão com GitHub
⏳ Aguardando deploy no Vercel
