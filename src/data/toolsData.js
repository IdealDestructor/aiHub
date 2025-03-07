// 所有 AI 工具数据
export const tools = [
  {
    id: "claude",
    name: "Claude",
    description:
      "Anthropic开发的AI助手，擅长对话、创意写作和复杂问题分析，注重安全和有益回答。",
    url: "https://claude.ai/new",
    icon: "fa-solid fa-comment-dots",
    iconBg: "#8e44ef",
    categories: ["聊天对话", "写作助手"],
  },
  {
    id: "qwen",
    name: "通义千问",
    description:
      "阿里巴巴开发的AI助手，中文理解与生成能力强，能够提供知识查询、对话互动等服务。",
    url: "https://chat.qwen.ai",
    icon: "fa-solid fa-robot",
    iconBg: "#0091ff",
    categories: ["聊天对话", "中文优化"],
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    description:
      "由OpenAI开发的强大AI对话助手，能够理解和生成自然语言、回答问题、创作内容。",
    url: "https://chatgpt.com",
    icon: "fa-solid fa-message",
    iconBg: "#10a37f",
    categories: ["聊天对话", "写作助手", "学习工具"],
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description:
      "深度学习AI助手，拥有广泛的知识背景，能够回答专业和技术问题，尤其擅长编程。",
    url: "https://chat.deepseek.com",
    icon: "fa-solid fa-brain",
    iconBg: "#007bff",
    categories: ["聊天对话", "编程开发"],
  },
  {
    id: "kimi",
    name: "Kimi",
    description:
      "由月之暗面开发的AI助手，具有强大的中文理解能力和知识库，支持长文档理解。",
    url: "https://kimi.moonshot.cn",
    icon: "fa-solid fa-moon",
    iconBg: "#4a34bd",
    categories: ["聊天对话", "中文优化", "文档处理"],
  },
  {
    id: "gemini",
    name: "Google Gemini",
    description:
      "Google开发的多模态AI模型，支持文本、图像、视频的交互理解与生成，集成多种创意工具。",
    url: "https://gemini.google.com",
    icon: "fa-solid fa-gem",
    iconBg: "#4285f4",
    categories: ["内容创作", "图像生成", "聊天对话"],
  },
  {
    id: "sd3",
    name: "Stable Diffusion 3",
    description:
      "最新一代开源图像生成模型，支持更高分辨率和更精准的提示词理解，适合专业创作。",
    url: "https://stability.ai/stable-diffusion",
    icon: "fa-solid fa-palette",
    iconBg: "#2d3436",
    categories: ["图像生成", "设计工具"],
  },
  {
    id: "midjourney",
    name: "MidJourney",
    description:
      "领先的AI艺术创作平台，通过自然语言提示生成高质量数字艺术作品。",
    url: "https://midjourney.com",
    icon: "fa-solid fa-paintbrush",
    iconBg: "#ff6b6b",
    categories: ["图像生成", "设计工具"],
  },
  {
    id: "perplexity",
    name: "Perplexity",
    description:
      "基于AI的搜索引擎和知识助手，可实时获取互联网信息并提供有出处的回答。",
    url: "https://www.perplexity.ai",
    icon: "fa-solid fa-magnifying-glass",
    iconBg: "#1e40af",
    categories: ["聊天对话", "搜索引擎"],
  },
  {
    id: "manus",
    name: "Manus",
    description:
      "文档智能助手，可以处理长篇文档内容，支持多种文件格式，帮助用户总结、分析文档。",
    url: "https://manus.im/app",
    icon: "fa-solid fa-file-lines",
    iconBg: "#3b82f6",
    categories: ["文档处理", "生产力工具"],
  },
  {
    id: "dalle",
    name: "DALL-E 3",
    description:
      "OpenAI开发的先进文本到图像生成系统，擅长生成富有创意的高质量图像。",
    url: "https://labs.openai.com",
    icon: "fa-solid fa-image",
    iconBg: "#10a37f",
    categories: ["图像生成", "设计工具"],
  },
  {
    id: "stablediffusion",
    name: "Stable Diffusion",
    description:
      "开源的文本到图像生成模型，支持高度定制化的图像创作和风格调整。",
    url: "https://stability.ai/stable-diffusion",
    icon: "fa-solid fa-palette",
    iconBg: "#6c5ce7",
    categories: ["图像生成", "设计工具"],
  },
  {
    id: "doubao",
    name: "豆包",
    description:
      "字节跳动公司基于云雀模型开发的AI工具，提供聊天机器人、写作助手以及英语学习助手等功能。",
    url: "https://www.doubao.com/chat/",
    icon: "fa-solid fa-mask",
    iconBg: "#ff6b6b",
    categories: ["聊天对话", "写作助手", "学习工具"],
  },
  {
    id: "runwayml",
    name: "RunwayML",
    description: "创意套件提供视频编辑、图像生成和AI驱动的多媒体创作工具。",
    url: "https://runway.ml",
    icon: "fa-solid fa-film",
    iconBg: "#ef4444",
    categories: ["视频制作", "设计工具"],
  },
  {
    id: "cohere",
    name: "Cohere",
    description: "企业级AI平台提供文本生成、分类和语义搜索能力。",
    url: "https://cohere.com",
    icon: "fa-solid fa-keyboard",
    iconBg: "#3b82f6",
    categories: ["写作助手", "生产力工具"],
  },
  {
    id: "character-ai",
    name: "Character.AI",
    description: "创建和与各种AI角色对话的平台，支持角色扮演和创意互动。",
    url: "https://character.ai",
    icon: "fa-solid fa-masks-theater",
    iconBg: "#a78bfa",
    categories: ["聊天对话", "娱乐服务"],
  },
  {
    id: "wenxin",
    name: "文心一言",
    description:
      "百度开发的人工智能语言模型，擅长中文创作与对话，知识丰富且富有创意。",
    url: "https://yiyan.baidu.com",
    icon: "fa-solid fa-comment",
    iconBg: "#285fff",
    categories: ["聊天对话", "中文优化", "写作助手"],
  },
  {
    id: "sparkdesk",
    name: "讯飞星火",
    description: "科大讯飞推出的大语言模型，中文理解能力强，支持多种场景应用。",
    url: "https://xinghuo.xfyun.cn",
    icon: "fa-solid fa-fire",
    iconBg: "#ff5a00",
    categories: ["聊天对话", "中文优化"],
  },
  {
    id: "zhipu",
    name: "智谱清言",
    description: "智谱AI开发的大语言模型，拥有深厚的中文知识背景和推理能力。",
    url: "https://chatglm.cn",
    icon: "fa-solid fa-brain",
    iconBg: "#4b5ffa",
    categories: ["聊天对话", "中文优化"],
  },
  {
    id: "pi",
    name: "Pi",
    description: "个性化AI助手，专注于情感交流和深度对话，提供贴心的互动体验。",
    url: "https://heypi.com",
    icon: "fa-solid fa-circle-user",
    iconBg: "#744cbe",
    categories: ["聊天对话", "社交助手"],
  },
  {
    id: "grok",
    name: "Grok",
    description: "X (Twitter) 推出的AI模型，特点是可访问实时信息并带有幽默感。",
    url: "https://grok.x.ai",
    icon: "fa-brands fa-x-twitter",
    iconBg: "#1da1f2",
    categories: ["聊天对话", "搜索引擎"],
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "专为程序员设计的AI代码编辑器，提供智能编码建议和代码解释。",
    url: "https://cursor.sh",
    icon: "fa-solid fa-keyboard",
    iconBg: "#007acc",
    categories: ["编程开发", "生产力工具"],
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    description: "开源AI社区和平台，提供数千个可用的AI模型和数据集。",
    url: "https://huggingface.co",
    icon: "fa-solid fa-face-smile",
    iconBg: "#ffb703",
    categories: ["开源工具", "编程开发"],
  },
  {
    id: "copilot-pro",
    name: "Microsoft Copilot",
    description:
      "微软全功能AI助手，融合在Office全家桶中，提升工作效率和创意表达。",
    url: "https://copilot.microsoft.com",
    icon: "fa-brands fa-microsoft",
    iconBg: "#107c41",
    categories: ["生产力工具", "办公助手"],
  },
  {
    id: "replit",
    name: "Replit",
    description: "集成AI编码助手的在线IDE，让编程更简单高效，支持多种语言。",
    url: "https://replit.com",
    icon: "fa-solid fa-terminal",
    iconBg: "#f26207",
    categories: ["编程开发", "学习工具"],
  },
  {
    id: "codeium",
    name: "Codeium",
    description:
      "免费的AI编程助手，提供代码补全、解释和重构功能，支持多种IDE。",
    url: "https://codeium.com",
    icon: "fa-solid fa-code",
    iconBg: "#09b6a2",
    categories: ["编程开发", "开源工具"],
  },
  {
    id: "chatpdf",
    name: "ChatPDF",
    description: "与PDF文档智能交互的AI工具，可以提问、总结和解析PDF内容。",
    url: "https://www.chatpdf.com",
    icon: "fa-solid fa-file-pdf",
    iconBg: "#ff5252",
    categories: ["文档处理", "学习工具"],
  },
  {
    id: "whisper",
    name: "Whisper",
    description: "OpenAI开发的开源语音识别系统，支持多语言转录和翻译。",
    url: "https://openai.com/research/whisper",
    icon: "fa-solid fa-ear-listen",
    iconBg: "#a855f7",
    categories: ["语音识别", "开源工具"],
  },
  {
    id: "eleven-labs",
    name: "ElevenLabs",
    description: "高质量的AI语音合成工具，可创建自然、情感丰富的人声。",
    url: "https://elevenlabs.io",
    icon: "fa-solid fa-volume-high",
    iconBg: "#5046e5",
    categories: ["语音合成", "内容创作"],
  },
  {
    id: "descript",
    name: "Descript",
    description: "革命性的音视频编辑平台，通过文本编辑方式操作音视频内容。",
    url: "https://www.descript.com",
    icon: "fa-solid fa-waveform",
    iconBg: "#f23a3c",
    categories: ["音频制作", "视频制作"],
  },
];

// 所有分类
export const allCategories = [
  "聊天对话",
  "写作助手",
  "图像生成",
  "中文优化",
  "文档处理",
  "视频制作",
  "音频制作",
  "语音合成",
  "语音识别",
  "编程开发",
  "生产力工具",
  "办公助手",
  "设计工具",
  "学习工具",
  "开源工具",
  "内容创作",
  "搜索引擎",
  "社交助手",
  "娱乐服务",
];
