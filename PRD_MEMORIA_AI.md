# PRD - Memória AI
## Product Requirements Document

---

## 1. Visão Geral do Produto

### 1.1 Resumo Executivo
**Memória AI** é uma plataforma web/mobile que utiliza inteligência artificial para criar vídeos de retrospectiva profissionais de forma automatizada. O produto permite que usuários transformem suas memórias (fotos e vídeos) em produções cinematográficas personalizadas, com edição assistida por IA, em poucos cliques.

### 1.2 Problema
Criar vídeos de retrospectiva para eventos especiais (aniversários, casamentos, formaturas) é tradicionalmente:
- Demorado e tecnicamente complexo
- Requer conhecimento de edição de vídeo
- Serviços profissionais são caros (R$ 500-3000)
- Ferramentas existentes exigem curvatura de aprendizado significativa

### 1.3 Solução
Uma plataforma que automatiza 90% do processo criativo através de IA, entregando vídeos profissionais em minutos, com controle fino opcional através de um editor simplificado.

### 1.4 Proposta de Valor
- **Para o usuário**: Vídeos profissionais em 10-15 minutos vs. horas de trabalho manual
- **Qualidade garantida**: IA treinada em padrões cinematográficos
- **Flexibilidade**: Múltiplas fontes de mídia aceitas
- **Controle criativo**: Editor pós-geração para ajustes finais

---

## 2. Público-Alvo

### 2.1 Personas Primárias

**Persona 1: Marina, 32 anos - Mãe Organizadora**
- Quer criar retrospectiva do aniversário do filho
- Pouco tempo livre, baixa habilidade técnica
- Disposta a pagar por conveniência (R$ 50-150)
- Prioriza resultado rápido e bonito

**Persona 2: Lucas, 28 anos - Padrinho de Casamento**
- Precisa criar vídeo surpresa para o casal
- Tem muitas fotos/vídeos de diferentes fontes
- Busca resultado profissional sem contratar editor
- Orçamento médio (R$ 100-200)

**Persona 3: Ana, 45 anos - Coordenadora de Eventos**
- Cria retrospectivas para múltiplos clientes
- Precisa de velocidade e consistência
- Usuária recorrente (assinatura mensal)
- Orçamento profissional (R$ 200-500/mês)

### 2.2 Segmentos de Mercado
- B2C: Pessoas físicas para eventos pessoais (70% do mercado inicial)
- B2B: Fotógrafos, wedding planners, agências de eventos (30%)

---

## 3. Objetivos do Produto

### 3.1 Objetivos de Negócio
- **Ano 1**: 10.000 usuários ativos, R$ 500K em receita
- **Taxa de conversão**: 15% de visitantes para preview → 40% de preview para pagamento
- **Ticket médio**: R$ 89 (vídeo único) ou R$ 199/mês (assinatura)
- **NPS**: > 50 nos primeiros 6 meses

### 3.2 Objetivos do Usuário
- Criar vídeo profissional em < 15 minutos
- Upload fácil de 20-100 arquivos de múltiplas fontes
- Preview em até 3 minutos após submissão
- Edição final em < 10 minutos (opcional)

---

## 4. Funcionalidades Core

### 4.1 Upload de Mídia (MVP)

#### 4.1.1 Fontes Suportadas
1. **Upload Direto**
   - Arrastar e soltar arquivos
   - Seleção múltipla de arquivos
   - Suporte: JPG, PNG, HEIC, MP4, MOV
   - Limite: 500MB por sessão (gratuito), 2GB (pago)

2. **Google Drive**
   - OAuth integration
   - Seleção de pastas/arquivos
   - Download automático em background

3. **Google Fotos**
   - OAuth integration
   - Seleção de álbuns ou fotos individuais
   - Respeitar permissões de compartilhamento

4. **Pasta Local (Desktop)**
   - Seleção de pasta completa
   - Processamento recursivo de subpastas

5. **iCloud/OneDrive** (Fase 2)

#### 4.1.2 Processamento de Fotos
- Auto-detecção de rostos e objetos principais
- Ordenação cronológica automática (via EXIF)
- Remoção de duplicatas
- Validação de qualidade (resolução mínima, blur detection)

#### 4.1.3 Processamento de Vídeos

**Tipos de Vídeos Aceitos**
- Formatos: MP4, MOV, AVI, MKV
- Resolução: mínima 480p, máxima 4K
- Duração: até 10 minutos por vídeo
- Codec: H.264, H.265, ProRes

**Análise Automática de Vídeos**
- Detecção de cenas e mudanças de quadro
- Identificação de highlights (momentos importantes)
- Análise de áudio (fala, música, ruído)
- Detecção de movimento e ação
- Qualidade técnica (estabilidade, exposição)

**Estratégias de Uso**
1. **Vídeos Curtos** (<15s): Incluir completo
2. **Vídeos Médios** (15-45s): 
   - Usar completo se alta qualidade
   - Clipar se tiver momentos específicos importantes
3. **Vídeos Longos** (>45s):
   - Extrair 2-3 melhores clipes (10-15s cada)
   - Usuário pode revisar e ajustar no editor

**Tratamento de Áudio em Vídeos**
- Vídeos com fala importante: manter áudio original
- Vídeos sem fala: mixar com música de fundo (30% volume)
- Opção de mute total no editor

### 4.2 Seleção de Tema

#### 4.2.1 Temas Disponíveis (MVP)
1. **Aniversário Infantil**
   - Paleta: cores vibrantes, pastéis
   - Estilo: alegre, dinâmico
   - Elementos: balões, confetes, animações lúdicas

2. **Aniversário Adulto**
   - Paleta: elegante, sofisticada
   - Estilo: moderno, minimalista
   - Elementos: dourado, preto/branco, luz particles

3. **Casamento**
   - Paleta: romântica (branco, rosa, dourado)
   - Estilo: cinematográfico, slow-motion
   - Elementos: flores, anéis, transições suaves

4. **Viagem**
   - Paleta: natural, vibrante
   - Estilo: aventureiro, documental
   - Elementos: mapas, carimbos, efeitos vintage

5. **Formatura**
   - Paleta: institucional (azul, bordô)
   - Estilo: inspiracional
   - Elementos: capelo, diploma, citações

6. **Memorial/Homenagem**
   - Paleta: sóbria (sépia, P&B)
   - Estilo: emotivo, contemplativo
   - Elementos: textos, fade suaves

#### 4.2.2 Personalização de Tema
- Nome do(a) homenageado(a)
- Data do evento
- Mensagem personalizada (até 200 caracteres)

### 4.3 Estética e Templates

#### 4.3.1 Templates Visuais (12 opções no MVP)

**Categoria: Moderno**
- Minimal Clean
- Bold Typography
- Geometric Shapes

**Categoria: Vintage**
- Film Grain
- Retro 80s
- Polaroid Aesthetic

**Categoria: Cinematográfico**
- Movie Trailer
- Documentary Style
- Cinematic Widescreen

**Categoria: Artístico**
- Watercolor
- Hand-drawn
- Abstract Art

#### 4.3.2 Parâmetros de Template
Cada template define:
- Transições específicas (20-30 tipos)
- Filtros de cor (LUTs)
- Timing padrão por slide (2-5s fotos, full vídeos)
- Layout de textos e títulos
- Elementos gráficos overlay

### 4.4 Seleção Musical

#### 4.4.1 Biblioteca de Músicas (Licenciadas)
- **150+ faixas** categorizadas por:
  - Mood (alegre, emotivo, inspirador, calmo)
  - Gênero (pop, clássico, instrumental, eletrônico)
  - Tema (casamento, infantil, formatura)
  - BPM (60-140)

#### 4.4.2 Funcionalidades
- Preview de 30s antes da seleção
- Seleção de até 2 músicas com crossfade automático
- Ajuste de volume relativo entre as faixas
- Sync automático de transições com batidas (beat detection)

#### 4.4.3 Upload de Música via YouTube **(NOVO)**

**Como Funciona**
O usuário pode colar um link do YouTube para extrair o áudio e usar como música de fundo.

**Interface**
```
┌────────────────────────────────────────────────────────────┐
│  MÚSICA DE FUNDO                                           │
│                                                            │
│  Opção 1: Biblioteca Memória AI (150+ músicas)           │
│  [🎵 Procurar na biblioteca]                              │
│                                                            │
│  ──────────────────────────────────────────────────────   │
│                                                            │
│  Opção 2: Usar música do YouTube                         │
│  [🔗 https://youtube.com/watch?v=____________]            │
│                                                            │
│  💡 Cole o link de qualquer vídeo do YouTube              │
│                                                            │
│  ⚠️ Responsabilidade: Certifique-se de ter direitos       │
│     para usar a música em seu vídeo pessoal               │
│                                                            │
│  [Adicionar do YouTube]                                   │
└────────────────────────────────────────────────────────────┘
```

**Processamento**
- Extração de áudio usando yt-dlp
- Conversão para MP3 (192kbps)
- Análise de BPM e estrutura
- Normalização de volume (LUFS -14.0)
- Upload para S3

**Limitações**
- Duração máxima: 10 minutos
- Tamanho máximo: 50MB
- Rate limit: 2 músicas do YouTube por vídeo (free), 5 (pro)

**Disclaimer Legal**
```
Ao importar música do YouTube, você declara:
1. Ter direitos ou permissão para usar esta música
2. O vídeo será para uso pessoal/privado
3. Entender que conteúdo protegido pode gerar problemas de copyright

Memória AI não se responsabiliza por violações de direitos autorais.
```

#### 4.4.4 Upload Próprio (Arquivo Local) - Fase 2
- Aceitar MP3, WAV, M4A
- Validação de copyright via Content ID (opcional)
- Responsabilidade do usuário sobre licenciamento

### 4.5 Princípio de Inclusão Total **(ATUALIZADO)**

**Filosofia do Produto**
O usuário já fez a curadoria ao escolher o que enviar. A IA NÃO descarta conteúdo.

**Papel da IA**
- ✅ Organizar cronologicamente
- ✅ Otimizar duração e ritmo
- ✅ Sugerir agrupamentos (montagens)
- ✅ Identificar momentos-chave
- ✅ Escolher transições apropriadas
- ❌ NÃO descartar fotos ou vídeos

**Controles do Usuário**
- Duração padrão de cada foto (2-5s via slider)
- Estratégia para vídeos longos (completo vs. clips)
- Visualização de todos os arquivos na ordem final
- Editor completo pós-geração

**Avisos Inteligentes**
Se duração total > 8 minutos:
- Sugerir reduzir tempo por foto
- Oferecer clipar vídeos longos
- Nunca forçar - decisão é do usuário

### 4.6 Geração com IA

#### 4.6.1 Processamento Inteligente
**Análise de Conteúdo**
- Detecção facial e agrupamento de pessoas
- Reconhecimento de cenas (indoor/outdoor, dia/noite)
- Análise de qualidade (nitidez, exposição)
- Detecção de momentos-chave (sorrisos, ação)

**Organização Cronológica**
- Ordenação automática por EXIF timestamp
- Identificação de segmentos temporais (início, meio, fim)
- Detecção de eventos principais

**Estrutura Narrativa**
- Abertura (5-10s): Título + mensagem inicial
- Desenvolvimento (60-80%): Fotos/vídeos em arco crescente
- Clímax (10%): Momentos principais (bolo, beijo, formatura)
- Encerramento (5-10s): Mensagem final + créditos

#### 4.6.2 Vídeos Gerados por IA
**Tipos de Inserts**
1. **Texto Animado**
   - Frases geradas contextualmente ("Era uma vez...", "10 anos depois...")
   - Citações relevantes ao tema
   - Datas e marcos importantes

2. **B-Roll Generativo** (usando Runway/Pika)
   - Cenas temáticas (balões subindo, fogos de artifício)
   - Transições criativas entre seções
   - Elementos gráficos 3D (confetes, flores caindo)

3. **Montagens Criativas**
   - Ken Burns effect em fotos estáticas
   - Split-screens de momentos paralelos
   - Picture-in-picture de vídeos

#### 4.6.3 Timing e Duração
- Duração total adaptável ao número de arquivos enviados
- Ritmo sincronizado com BPM da música
- Usuário controla duração padrão por foto (2-5s)

### 4.7 Preview e Paywall

#### 4.7.1 Preview Gratuito
**Características**
- Vídeo completo com marca d'água "Memória AI"
- Resolução reduzida (720p vs 4K final)
- Duração: vídeo completo
- Tempo de geração: 2-3 minutos
- Limite: 3 previews por usuário não cadastrado

**Objetivos**
- Demonstrar qualidade do resultado
- Criar confiança antes do pagamento
- Reduzir atrito na conversão

#### 4.7.2 Paywall
**Trigger**: Após visualização completa do preview

**Modelos de Pricing**
1. **Vídeo Único**
   - R$ 89,90 (resolução Full HD 1080p)
   - R$ 149,90 (resolução 4K + acesso ao editor)
   - Inclui: download ilimitado, 30 dias de armazenamento

2. **Plano Mensal** (B2B/Usuários Recorrentes)
   - R$ 199/mês: 10 vídeos + editor + biblioteca estendida
   - R$ 399/mês: Vídeos ilimitados + API access

**Cadastro Rápido**
- Email + senha OU
- Google/Facebook OAuth
- Pré-preenchimento com dados de checkout (CPF opcional)

**Métodos de Pagamento**
- Cartão de crédito (Stripe/Mercado Pago)
- PIX (confirmação instantânea)
- Boleto (liberação após compensação)

### 4.8 Biblioteca e Editor

#### 4.8.1 Biblioteca de Vídeos
**Organização**
- Grid visual com thumbnails
- Filtros: data, tema, status (rascunho/finalizado)
- Busca por nome/evento
- Armazenamento: ilimitado para assinantes, 90 dias para compras únicas

**Ações**
- Duplicar vídeo para nova versão
- Compartilhar link privado (vídeo não listado)
- Download em múltiplas resoluções
- Excluir permanentemente

#### 4.8.2 Editor Simplificado

**Princípios de Design**
- Interface drag-and-drop intuitiva
- Máximo 3 níveis de profundidade em menus
- Preview em tempo real (throttled)
- Auto-save a cada ação

**Funcionalidades Core**

**1. Timeline Visual**
```
[Intro] [Foto 1] [Foto 2] [Vídeo 1] [Insert IA] [Foto 3] ... [Outro]
```
- Drag-and-drop para reordenar
- Visualização de duração total
- Indicadores de música (waveform simplificado)

**2. Controles por Elemento**
Ao clicar em foto/vídeo:
- **Duração**: Slider 1-10s (fotos) ou trim (vídeos)
- **Transição**: Dropdown com 15 opções
  - Fade, Dissolve, Slide, Zoom, Wipe
  - Preview instantâneo ao hover
- **Filtros**: 8 opções rápidas (P&B, Vintage, Vibrant, etc.)
- **Remover**: Botão de exclusão

**3. Editor de Textos**
Para inserts gerados:
- Edição inline de texto
- 5 fontes pré-selecionadas
- Paleta de cores do template (4-6 cores)
- Posicionamento: superior, central, inferior
- Animações: 5 presets (fade, slide, typewriter, etc.)

**4. Ajuste Musical Avançado** **(NOVO)**

**Mixagem Inteligente de Áudio**

O sistema analisa automaticamente o volume de todos os vídeos importados e ajusta dinamicamente a música de fundo para garantir boa audibilidade.

**Funcionalidades Automáticas:**
- Normalização de loudness de vídeos (LUFS -16)
- Ducking automático da música durante fala
- Detecção de speech vs. música nos vídeos
- Ajuste dinâmico de volume em tempo real

**Interface de Controle:**
```
┌────────────────────────────────────────────────────────────┐
│  MIXAGEM DE ÁUDIO                                          │
│                                                            │
│  🎵 MÚSICA DE FUNDO                                        │
│  "Happy Birthday - Instrumental"                          │
│                                                            │
│  Volume Master                                            │
│  [━━━━━●━━━━] 60%                                         │
│                                                            │
│  ✓ Ducking automático (abaixar quando há fala)           │
│    Volume durante fala: [━━●━━━━━━] 15%                   │
│                                                            │
│  ──────────────────────────────────────────────────────   │
│                                                            │
│  🎬 VÍDEOS COM ÁUDIO                                       │
│                                                            │
│  📹 video_001.mp4 (0:15 - 0:30)                           │
│     ✓ Áudio normalizado automaticamente                  │
│     Volume: [━━━━━━●━━] 75%                               │
│     [🔇 Mutar] [⚙️ Ajustes avançados]                     │
│                                                            │
│  📹 video_003.mp4 (1:20 - 1:35)                           │
│     ⚠️ Contém fala importante                             │
│     Volume: [━━━━━━━●━] 85%                               │
│     Música neste trecho: 15% (automático)                │
│     [🔇 Mutar] [⚙️ Ajustes avançados]                     │
│                                                            │
│  ──────────────────────────────────────────────────────   │
│                                                            │
│  [👂 Pré-visualizar mixagem]                               │
└────────────────────────────────────────────────────────────┘
```

**Processamento de Áudio:**
- Análise de loudness (padrão EBU R128)
- Normalização automática para -16 LUFS
- Detecção de speech segments
- Aplicação de ducking com fade suave (500ms)
- Compressão e equalização quando necessário

**Estratégias de Mixagem:**
1. **Vídeo com fala importante**: Música a 15%, vídeo a 85%
2. **Vídeo com som ambiente**: Música a 40%, vídeo a 60%
3. **Vídeo sem áudio**: Música a 100%
4. **Narração do usuário**: Música a 20%, narração a 80%

**5. Gravação de Narração** **(NOVO)**

Permite ao usuário gravar sua própria voz para narrar o vídeo, mixada com a música de fundo.

**Casos de Uso:**
- Pais narrando história do filho
- Homenagem com mensagem pessoal
- Explicação de contexto das fotos
- Dublagem de vídeos sem áudio

**Interface:**
```
┌────────────────────────────────────────────────────────────┐
│  ADICIONAR NARRAÇÃO                                        │
│                                                            │
│  Grave sua voz para narrar momentos especiais do vídeo    │
│                                                            │
│  ┌──────────────────────────────────────────────────┐    │
│  │                                                  │    │
│  │         [🎙️]  Clique para gravar                │    │
│  │                                                  │    │
│  │   Posicione o cursor na timeline onde deseja     │    │
│  │   que a narração comece                         │    │
│  │                                                  │    │
│  └──────────────────────────────────────────────────┘    │
│                                                            │
│  NARRAÇÕES GRAVADAS (2)                                   │
│                                                            │
│  🎤 Narração 1                                            │
│     Posição: 0:15 - 0:45 (30s)                           │
│     [▶️ Ouvir] [✏️ Regravar] [🗑️ Excluir]                 │
│     Volume: [━━━━━●━━━━] 80%                              │
│                                                            │
│  🎤 Narração 2                                            │
│     Posição: 2:10 - 2:30 (20s)                           │
│     [▶️ Ouvir] [✏️ Regravar] [🗑️ Excluir]                 │
│     Volume: [━━━━━●━━━━] 80%                              │
│                                                            │
│  ──────────────────────────────────────────────────────   │
│                                                            │
│  MIXAGEM AUTOMÁTICA                                       │
│  ✓ Abaixar música durante narração (20%)                 │
│  ✓ Redução de ruído de fundo                             │
│  ✓ Equalização de voz                                    │
│                                                            │
│  [+ Adicionar Nova Narração]  [👂 Preview Completo]      │
└────────────────────────────────────────────────────────────┘
```

**Tecnologia:**
- Gravação via Web Audio API (navegador)
- Formato: WebM → conversão para MP3
- Processamento automático:
  - Redução de ruído (noise reduction)
  - Equalização para voz (realce em 3kHz)
  - Compressão dinâmica
  - De-esser (redução de sibilância)
  - Normalização de loudness

**Limitações:**
- Duração máxima por narração: 2 minutos
- Máximo de 5 narrações por vídeo
- Sample rate: 48kHz, mono
- Bitrate final: 192kbps

**6. Adicionar Elementos** (Opcional)
- Upload de foto/vídeo adicional
- Criar insert de texto personalizado
- Adicionar logo/marca d'água

**Limitações Intencionais** (para manter simplicidade)
- ❌ Edição frame-by-frame
- ❌ Efeitos avançados (chroma key, masking)
- ❌ Múltiplas trilhas de áudio (além de música + vídeos + narração)
- ❌ Correção de cor manual

#### 4.8.3 Renderização Final
**Processo**
1. Usuário clica "Gerar Vídeo Final"
2. Fila de processamento (5-15 min dependendo da resolução)
3. Notificação por email quando pronto
4. Download disponível na biblioteca

**Formatos de Exportação**
- MP4 (H.264) - compatibilidade universal
- Resoluções: 1080p (padrão), 4K (premium)
- Aspect ratios: 16:9 (padrão), 9:16 (stories), 1:1 (quadrado)

---

## 5. Jornada do Usuário

### 5.1 Fluxo Principal (Happy Path)

```
1. Landing Page
   ↓
2. "Criar Retrospectiva" (CTA)
   ↓
3. Upload de Mídia
   - Escolher fonte(s)
   - Upload em background
   - Preview de arquivos carregados
   ↓
4. Configuração
   - Selecionar tema (modal com 6 cards)
   - Escolher template visual (12 opções com preview)
   - Selecionar 1-2 músicas (tocadores inline OU YouTube)
   - Adicionar detalhes (nome, data, mensagem)
   - Ajustar duração padrão de fotos (2-5s slider)
   - Escolher estratégia para vídeos longos
   ↓
5. Geração
   - Loading criativo (3-5 min)
   - "Sua IA está criando magia..." com progresso
   ↓
6. Preview + Paywall
   - Player de vídeo com marca d'água
   - Sidebar: pricing + CTA
   - "Adorei, quero sem marca d'água!"
   ↓
7. Checkout
   - Cadastro rápido (se novo)
   - Pagamento
   ↓
8. Biblioteca
   - Acesso ao vídeo sem marca d'água
   - Botão "Editar" → Editor
   ↓
9. Editor (Opcional)
   - Ajustes conforme necessário
   - Mixagem de áudio
   - Gravação de narração
   - "Gerar Versão Final"
   ↓
10. Download & Compartilhamento
```

### 5.2 Fluxos Alternativos

**Usuário abandona no upload**
- Email de retomada após 24h
- "Você deixou 23 fotos esperando..."

**Usuário não gosta do preview**
- Botão "Gerar Nova Versão" (muda template/música)
- Limite: 3 gerações gratuitas

**Pagamento falha**
- Retry automático
- Oferecer métodos alternativos
- Suporte via chat

---

## 6. Requisitos Técnicos

### 6.1 Arquitetura

**Frontend**
- React/Next.js (web)
- React Native (mobile - Fase 2)
- TailwindCSS para UI
- Framer Motion para animações

**Backend**
- Node.js (Express/NestJS)
- PostgreSQL (dados estruturados)
- S3/CloudFlare R2 (armazenamento de mídia)
- Redis (cache e filas)

**IA e Processamento**
- OpenAI GPT-4 (geração de textos)
- Runway/Pika API (geração de vídeos)
- FFmpeg (processamento de vídeo)
- Face-recognition.js (detecção facial)
- YOLO/CLIP (análise visual)
- Librosa (análise musical)
- yt-dlp (extração de áudio do YouTube)
- pyloudnorm (normalização de áudio LUFS)

**Infraestrutura**
- AWS/Vercel (hosting)
- CloudFlare (CDN)
- Sentry (error tracking)
- Mixpanel/Amplitude (analytics)

### 6.2 Integrações

**Obrigatórias (MVP)**
- Google Drive API
- Google Photos API
- Stripe/Mercado Pago
- SendGrid (emails transacionais)
- YouTube Data API (para validação)

**Desejáveis (Fase 2)**
- iCloud API
- OneDrive API
- Dropbox API
- WhatsApp Business API (compartilhamento)

### 6.3 Performance

**Tempos Alvo**
- Upload: < 30s para 50 fotos (10MB cada)
- Preview gerado: < 3 minutos
- Vídeo final 4K: < 15 minutos
- Editor: < 1s de resposta por ação

**Escalabilidade**
- Suportar 100 usuários simultâneos (Mês 1)
- 1000 usuários simultâneos (Mês 6)
- Processamento paralelo de até 50 vídeos

### 6.4 Segurança e Privacidade

**Dados do Usuário**
- Criptografia em trânsito (TLS 1.3)
- Criptografia em repouso (AES-256)
- Compliance com LGPD
- Exclusão de dados sob demanda

**Conteúdo**
- Fotos/vídeos não usados para treinamento de IA
- Armazenamento isolado por usuário
- Links de compartilhamento com tokens únicos
- Auto-exclusão de mídias após 90 dias (não-assinantes)

**Música do YouTube**
- Disclaimer legal de responsabilidade
- Não armazenar cópias permanentes (deletar após uso)
- Rate limiting por IP e usuário

---

## 7. Design e UX

### 7.1 Princípios de Design

1. **Simplicidade Radical**
   - Máximo 1 decisão importante por tela
   - Defaults inteligentes para tudo
   - "Funciona bem sem customização"

2. **Feedback Constante**
   - Loading states criativos
   - Progresso visível em todas as etapas
   - Previews instantâneos sempre que possível

3. **Confiança e Transparência**
   - Mostrar preview completo antes do pagamento
   - Pricing claro e sem pegadinhas
   - Exemplos reais em toda jornada

4. **Mobile-First**
   - 70% do tráfego esperado mobile
   - Touch-friendly (botões > 44px)
   - Upload via câmera nativa

### 7.2 Referências Visuais

**Inspirações de UI**
- Canva (simplicidade de templates)
- Runway (interface de IA generativa)
- CapCut (editor mobile simplificado)
- Descript (timeline intuitiva)

**Paleta de Cores (Brand)**
- Primary: #6C5CE7 (roxo vibrante)
- Secondary: #FF6B9D (rosa)
- Neutral: #2D3436 (dark) / #F5F6FA (light)
- Success: #00B894
- Warning: #FDCB6E

### 7.3 Componentes-Chave

**Upload Zone**
- Drag-and-drop área destacada
- Ícones grandes de fontes (Drive, Fotos, Pasta)
- Grid de thumbnails de arquivos carregados
- Progress bar por arquivo

**Template Selector**
- Grid 3x4 (desktop) ou 2xN (mobile)
- Hover: preview animado de 3s
- Tag de "Popular" e "Novo"

**Music Player**
- Waveform visual simplificado
- Controles play/pause inline
- Tag de mood e BPM
- Input para URL do YouTube

**Editor Timeline**
- Zoom in/out
- Snap to grid
- Keyboard shortcuts (delete, undo)
- Waveform de música e narrações
- Indicadores visuais de ducking automático

---

## 8. Métricas de Sucesso

### 8.1 KPIs Principais

**Aquisição**
- CAC (Custo de Aquisição): < R$ 45
- Taxa de conversão landing → signup: > 10%
- Taxa de conversão preview → pagamento: > 35%

**Engajamento**
- Tempo médio de criação: < 15 min
- Taxa de uso do editor: 60%
- Taxa de uso de narração: 15%
- Taxa de uso de música do YouTube: 25%
- NPS: > 50

**Retenção**
- Repeat purchase (60 dias): > 20%
- Conversão para assinatura mensal: > 8%

**Receita**
- MRR (Monthly Recurring Revenue): R$ 50K (Mês 6)
- ARPU (Average Revenue Per User): R$ 120

### 8.2 Métricas de Produto

**Qualidade**
- Taxa de satisfação com áudio mixing: > 85%
- Bugs críticos: 0 por semana
- Tempo médio de renderização: < 8 min

**Performance**
- Uptime: > 99.5%
- Tempo de preview: < 3 min em 95% dos casos
- Taxa de falha no upload: < 2%
- Taxa de falha na extração do YouTube: < 5%

---

## 9. Roadmap

### 9.1 Fase 1 - MVP (Meses 1-3)

**Mês 1: Core Features**
- Upload (Google Drive, Fotos, local)
- 6 temas básicos
- 6 templates visuais
- 50 músicas licenciadas
- Upload de música via YouTube
- Geração de preview com marca d'água
- Paywall e checkout (cartão + PIX)

**Mês 2: Editor + Refinamentos**
- Biblioteca de vídeos
- Editor simplificado (timeline, textos, transições)
- Mixagem inteligente de áudio
- Renderização final sem marca d'água
- Sistema de notificações (email)
- Analytics básico

**Mês 3: Polish + Launch**
- 12 templates visuais totais
- 150 músicas
- Gravação de narração
- Otimizações de performance
- Onboarding interativo
- Beta privado com 100 usuários

### 9.2 Fase 2 - Crescimento (Meses 4-6)

**Funcionalidades**
- App mobile (iOS/Android)
- Upload de músicas próprias (arquivo local)
- iCloud/OneDrive integration
- Colaboração (múltiplos usuários editando)
- API para B2B

**Templates Premium**
- 20 templates adicionais
- Temas sazonais (Natal, Ano Novo)
- Estilos de celebridades/influencers

**Monetização**
- Plano empresarial (white-label)
- Marketplace de templates (criadores externos)

### 9.3 Fase 3 - Escala (Meses 7-12)

**IA Avançada**
- Geração de legendas automáticas
- Dubbing em múltiplos idiomas
- Criação de avatares 3D
- Edição por comandos de voz

**Recursos Sociais**
- Compartilhamento social nativo
- Galerias públicas (opt-in)
- Contests e challenges

**Internacionalização**
- Espanhol (América Latina)
- Inglês (EUA)

---

## 10. Riscos e Mitigações

### 10.1 Riscos Técnicos

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| APIs de IA (Runway/Pika) instáveis | Alta | Alto | Fallback para biblioteca de B-rolls pré-renderizados |
| Tempo de processamento > 10 min | Média | Médio | Processamento paralelo, compression prévia |
| Custo de infra explode com escala | Média | Alto | Monitoramento rigoroso, limits por usuário |
| Violação de copyright (YouTube) | Alta | Alto | Disclaimer claro + responsabilização do usuário + detecção Content ID opcional |
| Qualidade de narração gravada ruim | Média | Médio | Processamento automático (noise reduction, EQ) + preview antes de confirmar |
| Mixagem de áudio complexa demais | Média | Médio | Presets inteligentes + controles simplificados + preview em tempo real |

### 10.2 Riscos de Negócio

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Baixa conversão preview → pagamento | Média | Alto | A/B testing agressivo de pricing, extended trial |
| Competição de apps gratuitos | Alta | Médio | Diferenciação por qualidade IA, templates exclusivos |
| Sazonalidade (picos em dez/jun) | Alta | Baixo | Diversificação de temas, push de uso corporativo |

### 10.3 Riscos Legais

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Copyright de músicas (YouTube) | Média | Alto | Disclaimer robusto, educação do usuário, rate limiting |
| Uso indevido de fotos de terceiros | Média | Médio | Termos claros, detecção de faces conhecidas |
| LGPD compliance | Baixa | Alto | Consultoria legal, DPO dedicado |

---

## 11. Go-to-Market

### 11.1 Estratégia de Lançamento

**Pré-lançamento (30 dias antes)**
- Landing page com signup para early access
- Vídeos de demonstração no YouTube/Instagram
- Parcerias com 10 micro-influencers (lifestyle/família)

**Lançamento**
- Product Hunt launch
- Promoção: 50% off primeiros 500 usuários
- Webinar "Como criar retrospectivas profissionais em 10 min"

**Pós-lançamento**
- Programa de referral (20% desconto para ambos)
- Case studies com primeiros clientes B2B
- Ads pagos (Meta, Google) com LTV > 3x CAC

### 11.2 Canais de Aquisição

**Orgânico (60% do tráfego alvo)**
- SEO: "criar vídeo de aniversário", "retrospectiva automática"
- YouTube: tutoriais e comparações
- Instagram/TikTok: antes/depois virais

**Pago (40%)**
- Meta Ads: lookalike de compradores
- Google Ads: intenção alta (keywords específicos)
- Partnerships: blogs de maternidade, casamento

### 11.3 Pricing Inicial

**Teste A/B de Pricing (primeiros 3 meses)**

| Variante | Vídeo Único | Mensal | Hipótese |
|----------|-------------|--------|----------|
| A (Low) | R$ 69 | R$ 149 | Maximiza volume |
| B (Mid) | R$ 89 | R$ 199 | Otimizado (control) |
| C (High) | R$ 129 | R$ 299 | Percepção premium |

**Meta**: Identificar elasticidade de preço e maximizar receita total.

---

## 12. Critérios de Sucesso (3 meses pós-MVP)

### 12.1 Must-Have
✅ 5.000 usuários cadastrados  
✅ 1.000 vídeos pagos gerados  
✅ NPS > 40  
✅ Taxa de preview → pagamento > 30%  
✅ Uptime > 99%  
✅ < 5% de reclamações sobre qualidade de áudio

### 12.2 Nice-to-Have
🎯 Menção em 3 publicações de mídia (tech/lifestyle)  
🎯 10 clientes B2B recorrentes  
🎯 Payback do MVP em 6 meses  
🎯 15% dos vídeos usando narração gravada  
🎯 20% dos vídeos usando música do YouTube

### 12.3 Pivot Triggers
- Se conversão < 15% após 2 meses → Reavaliar pricing/preview
- Se CAC > R$ 80 → Mudar estratégia de aquisição
- Se NPS < 20 → Problemas fundamentais de produto
- Se > 30% de reclamações sobre áudio → Revisar mixagem automática

---

## 13. Equipe Necessária

### 13.1 Fase MVP
- **1 Product Manager** (você)
- **2 Full-stack Developers** (React + Node.js)
- **1 AI/ML Engineer** (integrações de IA + processamento de áudio)
- **1 Designer UI/UX**
- **1 QA/Tester** (part-time)

### 13.2 Pós-lançamento (adicionar)
- **1 Growth Marketer**
- **1 Customer Success**
- **1 Backend especialista** (escalabilidade)
- **1 Audio Engineer** (consultoria para mixagem)

---

## 14. Apêndices

### 14.1 Referências de Mercado

**Concorrentes Diretos**
- Animoto (US$ 16/mês) - limitado em IA
- Magisto (descontinuado - oportunidade)
- Lumen5 (foco B2B, $ 29/mês)

**Concorrentes Indiretos**
- Canva Video (grátis com limitações)
- CapCut (grátis, mobile-only)
- iMovie (gratuito, só Apple)

**Diferenciação**: IA generativa + qualidade profissional + multi-platform + mixagem inteligente de áudio

### 14.2 Estimativa de Custos (Mensal - 1.000 vídeos)

| Item | Custo |
|------|-------|
| Infra (AWS/Vercel) | R$ 3.000 |
| APIs de IA (Runway/GPT) | R$ 4.500 |
| Licenças musicais | R$ 1.200 |
| Processamento de áudio | R$ 300 |
| Stripe/Mercado Pago (2.5%) | R$ 2.250 |
| Armazenamento (S3) | R$ 800 |
| **Total** | **R$ 12.050** |

**Margem bruta**: ~73% (assumindo ticket médio R$ 89)

### 14.3 Stack Tecnológico Detalhado

**Análise de Mídia**
- YOLO v8 (detecção de objetos)
- CLIP (classificação de cenas)
- DeepFace (reconhecimento facial)
- Librosa (análise musical e beat detection)

**Processamento de Áudio**
- FFmpeg (conversão e mixagem)
- pyloudnorm (normalização LUFS)
- noisereduce (redução de ruído)
- yt-dlp (download do YouTube)

**Geração de Conteúdo**
- OpenAI GPT-4o (textos e estrutura narrativa)
- Runway Gen-3 / Pika (vídeos generativos)

**Renderização**
- FFmpeg (pipeline completo)
- AWS Lambda (processamento paralelo)
- Redis/BullMQ (filas)

---

## 15. Próximos Passos

### 15.1 Validação Imediata (Semana 1-2)
1. **Entrevistas com usuários** (10-15 personas)
   - Dor atual ao criar vídeos
   - Willingness to pay
   - Features prioritárias
   - Reação à funcionalidade de narração

2. **Prototipagem rápida**
   - Figma clickable prototype
   - Teste com 5 usuários (think-aloud)

3. **POC Técnico**
   - Testar APIs de IA (Runway, Pika)
   - Validar extração de áudio do YouTube
   - Testar mixagem automática com FFmpeg
   - Calcular custo real por vídeo

### 15.2 Desenvolvimento (Semana 3-12)
- Sprint 1-2: Upload + tema/template selection
- Sprint 3-4: Integração IA + preview
- Sprint 5-6: Paywall + biblioteca + YouTube music
- Sprint 7-8: Editor simplificado + mixagem inteligente
- Sprint 9-10: Gravação de narração + polimento
- Sprint 11-12: Beta privado

### 15.3 Lançamento (Semana 13)
- Soft launch com early adopters
- Monitoramento intensivo (24/7)
- Iteração rápida baseada em feedback

---

**Documento vivo** - Última atualização: Fevereiro 2026  
**Owner**: Rafa (Product Manager)  
**Stakeholders**: Eng, Design, Marketing, Jurídico

**Versão**: 2.0 (com recursos de áudio avançados)
