# 🔧 Alternativa: Push via Terminal (Passo a Passo)

## Se você quer tentar pelo terminal novamente:

---

## 📝 Passo 1: Criar Token (IMPORTANTE!)

1. Abra no navegador: **https://github.com/settings/tokens**
2. Clique em **"Generate new token"**
3. Selecione **"Generate new token (classic)"**
4. Preencha:
   - **Note**: `E.C.Hortolandiafutsal`
   - **Expiration**: `90 days`
   - **Scopes**: Marque apenas **`repo`** ✅
5. Role até o final e clique em **"Generate token"**
6. **COPIE O TOKEN AGORA** (você só verá uma vez!)
   - Exemplo: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

## 💻 Passo 2: Executar no Terminal

Abra o Terminal e execute:

```bash
cd /Users/prospere/Desktop/E.C.hortolandia
git push -u origin main
```

---

## 🔐 Passo 3: Inserir Credenciais

Quando aparecer:

```
Username for 'https://github.com': 
```

1. Digite: `emegs88`
2. Pressione Enter

Quando aparecer:

```
Password for 'https://emegs88@github.com': 
```

1. **Cole o TOKEN** que você copiou (não sua senha!)
2. Pressione Enter

**IMPORTANTE**: O terminal não mostra nada quando você digita a senha/token - é normal!

---

## ✅ Sucesso!

Se funcionar, você verá:

```
Enumerating objects: 41, done.
Counting objects: 100% (41/41), done.
Delta compression using up to X threads
Compressing objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), done.
To https://github.com/emegs88/E.C.Hortolandiafutsal.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## ❌ Se Der Erro

### Erro: "Authentication failed"
- Verifique se copiou o token completo
- Certifique-se de que o token tem escopo `repo`
- Tente criar um novo token

### Erro: "Repository not found"
- Verifique se o repositório existe: https://github.com/emegs88/E.C.Hortolandiafutsal
- Confirme que você tem acesso

### Erro: "Permission denied"
- Verifique suas permissões no GitHub
- Use um token com escopo `repo`

---

## 💡 Dica

Se continuar com problemas, **use o GitHub Desktop** - é muito mais fácil! (veja SOLUCAO_FACIL.md)
