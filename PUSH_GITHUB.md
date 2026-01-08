# 🚀 Como Fazer Push para o GitHub

## ✅ Repositório Remoto Configurado!

O repositório local já está conectado a:
**https://github.com/emegs88/E.C.Hortolandiafutsal.git**

---

## 🔐 Autenticação Necessária

Para fazer o push, você precisa se autenticar. Escolha uma opção:

---

## Opção 1: Personal Access Token (Recomendado)

### Passo 1: Criar Token no GitHub

1. Acesse: https://github.com/settings/tokens
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Configure:
   - **Note**: "E.C.Hortolandiafutsal"
   - **Expiration**: 90 days (ou sua preferência)
   - **Scopes**: Marque **`repo`** (acesso completo aos repositórios)
4. Clique em **"Generate token"**
5. **COPIE O TOKEN** (você só verá uma vez!)

### Passo 2: Fazer Push

Execute no terminal:

```bash
git push -u origin main
```

Quando pedir:
- **Username**: `emegs88`
- **Password**: Cole o **Personal Access Token** (não sua senha!)

---

## Opção 2: SSH (Se já configurado)

Se você já tem SSH configurado no GitHub:

```bash
# Mudar para SSH
git remote set-url origin git@github.com:emegs88/E.C.Hortolandiafutsal.git

# Fazer push
git push -u origin main
```

---

## Opção 3: GitHub CLI

Se você tem `gh` instalado:

```bash
gh auth login
git push -u origin main
```

---

## ✅ Após o Push Bem-Sucedido

Você verá algo como:
```
Enumerating objects: 41, done.
Counting objects: 100% (41/41), done.
...
To https://github.com/emegs88/E.C.Hortolandiafutsal.git
 * [new branch]      main -> main
```

---

## 🔄 Próximo Passo: Deploy no Vercel

Após o push, faça o deploy no Vercel:

1. Acesse: https://vercel.com/new
2. Faça login com GitHub
3. Selecione o repositório: **E.C.Hortolandiafutsal**
4. Configure:
   - **Framework Preset**: Other
   - **Build Command**: (deixe vazio)
   - **Output Directory**: (deixe vazio)
5. Clique em **"Deploy"**

---

## 📝 Comandos Rápidos

```bash
# Ver status
git status

# Ver remoto configurado
git remote -v

# Fazer push
git push -u origin main

# Atualizações futuras
git add .
git commit -m "Descrição"
git push origin main
```

---

## 🆘 Problemas?

### Erro: "Authentication failed"
- Verifique se o token está correto
- Certifique-se de que o token tem permissão `repo`

### Erro: "Repository not found"
- Verifique se você tem acesso ao repositório
- Confirme que o nome está correto: `E.C.Hortolandiafutsal`

### Erro: "Permission denied"
- Verifique suas permissões no GitHub
- Use um token com escopo `repo`
