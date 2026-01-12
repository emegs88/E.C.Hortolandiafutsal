#!/bin/bash
# Script para fazer push para GitHub
# Execute: bash push.sh

echo "🚀 Fazendo push para GitHub..."
echo ""

# Verificar se está no diretório correto
if [ ! -f "index.html" ]; then
    echo "❌ Erro: Execute este script no diretório do projeto"
    exit 1
fi

# Verificar se o remote está configurado
if ! git remote get-url origin &>/dev/null; then
    echo "❌ Erro: Remote não configurado"
    exit 1
fi

echo "📦 Repositório: $(git remote get-url origin)"
echo "🌿 Branch: $(git branch --show-current)"
echo ""

# Tentar push
echo "⏳ Tentando fazer push..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Push realizado com sucesso!"
    echo "🔗 Verifique em: https://github.com/emegs88/E.C.Hortolandiafutsal"
else
    echo ""
    echo "❌ Push falhou. Possíveis causas:"
    echo "   1. Precisa de autenticação (Personal Access Token)"
    echo "   2. Repositório não existe ou sem permissão"
    echo ""
    echo "💡 Solução:"
    echo "   1. Crie um token em: https://github.com/settings/tokens"
    echo "   2. Execute: git push -u origin main"
    echo "   3. Quando pedir senha, use o TOKEN (não sua senha)"
fi
