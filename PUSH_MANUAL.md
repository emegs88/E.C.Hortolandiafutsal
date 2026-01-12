# 🚀 Como Fazer Push Manualmente

## ⚠️ Autenticação Necessária

O push precisa de autenticação. Siga estes passos:

---

## 📝 Passo 1: Criar Personal Access Token

1. Acesse: **https://github.com/settings/tokens**
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Configure:
   - **Note**: "E.C.Hortolandiafutsal"
   - **Expiration**: 90 days
   - **Scopes**: Marque **`repo`** ✅
4. Clique em **"Generate token"**
5. **COPIE O TOKEN** (você só verá uma vez!)

---

## 🔐 Passo 2: Fazer Push

Execute no terminal:

```bash
git push -u origin main
```

Quando pedir:
- **Username**: `emegs88`
- **Password**: Cole o **TOKEN** (não sua senha do GitHub!)

---

## ✅ Após Push Bem-Sucedido

Você verá:
```
Enumerating objects: 41, done.
Counting objects: 100% (41/41), done.
...
To https://github.com/emegs88/E.C.Hortolandiafutsal.git
 * [new branch]      main -> main
```

---

## 🔄 Alternativa: GitHub Desktop

1. Instale: https://desktop.github.com
2. Abra o repositório local
3. Clique em **"Publish repository"**
4. Selecione o repositório remoto
5. Clique em **"Publish"**

---

## ⚡ Próximo: Deploy no Vercel

Após o push, faça deploy:

1. Acesse: **https://vercel.com/new**
2. Login com GitHub
3. Selecione: **E.C.Hortolandiafutsal**
4. Configure:
   - Framework: **Other**
   - Build Command: (vazio)
   - Output Directory: (vazio)
5. Clique em **"Deploy"**

---

## 📋 Status Atual

✅ Repositório local: Pronto
✅ Remote configurado: https://github.com/emegs88/E.C.Hortolandiafutsal.git
✅ 5 commits prontos
⏳ Aguardando push (precisa autenticação)

