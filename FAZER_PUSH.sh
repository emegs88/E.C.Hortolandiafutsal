#!/bin/bash
# Script para fazer push para GitHub
# Execute: bash FAZER_PUSH.sh

echo "🚀 Fazendo push para GitHub..."
echo ""

# Verificar se está no diretório correto
if [ ! -f "index.html" ]; then
    echo "❌ Erro: Execute este script no diretório do projeto"
    exit 1
fi

echo "📦 Repositório: $(git remote get-url origin)"
echo "🌿 Branch: $(git branch --show-current)"
echo "📝 Commits: $(git rev-list --count HEAD)"
echo ""

echo "⏳ Fazendo push..."
echo "💡 Quando pedir credenciais:"
echo "   Username: emegs88"
echo "   Password: Use seu Personal Access Token (não sua senha!)"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ✅ ✅ PUSH REALIZADO COM SUCESSO! ✅ ✅ ✅"
    echo ""
    echo "🔗 Verifique em: https://github.com/emegs88/E.C.Hortolandiafutsal"
    echo ""
    echo "⚡ Próximo passo: Deploy no Vercel"
    echo "   1. Acesse: https://vercel.com/new"
    echo "   2. Login com GitHub"
    echo "   3. Selecione: E.C.Hortolandiafutsal"
    echo "   4. Deploy!"
else
    echo ""
    echo "❌ Push falhou."
    echo ""
    echo "💡 Você precisa criar um Personal Access Token:"
    echo "   1. Acesse: https://github.com/settings/tokens"
    echo "   2. Generate new token (classic)"
    echo "   3. Marque escopo 'repo'"
    echo "   4. Execute este script novamente"
    echo "   5. Use o TOKEN como senha (não sua senha do GitHub)"
fi
