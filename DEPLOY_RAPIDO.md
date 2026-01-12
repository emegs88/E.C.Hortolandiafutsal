# 🚀 Deploy Rápido - GitHub e Vercel

## ✅ Status Atual
- ✅ Repositório Git inicializado
- ✅ Remote configurado: `https://github.com/emegs88/E.C.Hortolandiafutsal.git`
- ✅ Arquivos commitados
- ⏳ **Aguardando push para GitHub**

## 📤 Passo 1: Push para GitHub

### Opção A: GitHub Desktop (Mais Fácil) ⭐ RECOMENDADO

1. Baixe o GitHub Desktop: https://desktop.github.com/
2. Abra o GitHub Desktop
3. File → Add Local Repository
4. Selecione a pasta: `/Users/prospere/Desktop/E.C.hortolandia`
5. Clique em "Publish repository" ou "Push origin"
6. Faça login com sua conta GitHub (`emegs88`)

### Opção B: Terminal com Personal Access Token

1. Crie um Personal Access Token no GitHub:
   - Acesse: https://github.com/settings/tokens
   - Clique em "Generate new token (classic)"
   - Dê um nome (ex: "ECHortolandia")
   - Selecione escopo: `repo` (todas as opções)
   - Clique em "Generate token"
   - **COPIE O TOKEN** (você só verá uma vez!)

2. Execute no terminal:
```bash
cd /Users/prospere/Desktop/E.C.hortolandia
git push -u origin main
```

3. Quando pedir:
   - **Username**: `emegs88`
   - **Password**: Cole o Personal Access Token (não sua senha do GitHub!)

## 🌐 Passo 2: Deploy no Vercel

### Método 1: Via Site do Vercel (Recomendado)

1. Acesse: https://vercel.com
2. Faça login com GitHub
3. Clique em "Add New Project"
4. Importe o repositório: `emegs88/E.C.Hortolandiafutsal`
5. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (raiz)
   - **Build Command**: (deixe vazio)
   - **Output Directory**: (deixe vazio)
6. Clique em "Deploy"
7. Aguarde alguns segundos
8. Seu site estará online! 🎉

### Método 2: Via Vercel CLI

```bash
# Instalar Vercel CLI (se ainda não tiver)
npm i -g vercel

# No diretório do projeto
cd /Users/prospere/Desktop/E.C.hortolandia
vercel

# Siga as instruções:
# - Login com GitHub
# - Link ao projeto existente ou crie novo
# - Deploy!
```

## 📝 Configuração do Vercel (Opcional)

Crie um arquivo `vercel.json` na raiz do projeto:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

## ✅ Após o Deploy

- Seu site estará disponível em: `https://e-c-hortolandiafutsal.vercel.app` (ou URL personalizada)
- Você pode configurar um domínio customizado no Vercel
- Cada push para GitHub atualiza automaticamente o site no Vercel

## 🆘 Problemas?

- **Erro de autenticação**: Use GitHub Desktop ou Personal Access Token
- **Erro no Vercel**: Verifique se todos os arquivos estão no GitHub
- **Site não carrega**: Verifique se o `index.html` está na raiz do repositório

---

**Dica**: Após o primeiro deploy, o Vercel conecta automaticamente ao GitHub e faz deploy a cada push! 🚀
