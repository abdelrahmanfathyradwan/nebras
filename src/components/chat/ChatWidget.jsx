import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  FaComments,
  FaTimes,
  FaPaperPlane,
  FaWhatsapp,
  FaShieldAlt,
  FaRobot,
  FaUser,
  FaSyncAlt,
  FaExternalLinkAlt,
  FaTags,
  FaGraduationCap,
  FaAward,
  FaChevronRight,
  FaBolt,
} from 'react-icons/fa';
import { CHAT_CONFIG } from '../../config/chatConfig';

// Richly styled suggested questions with distinctive colors, badges, and icons
const SUGGESTED_QUESTIONS = [
  {
    id: 'pricing',
    label: 'Packages & pricing',
    subtitle: 'From $6/hr • 1 to 6-month plans',
    badge: 'BEST VALUE',
    badgeStyle: 'bg-amber-100/90 text-amber-800 border-amber-300/70',
    icon: FaTags,
    iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-sm shadow-amber-500/30',
    cardHover: 'hover:bg-gradient-to-r hover:from-amber-50/80 hover:to-orange-50/40 hover:border-amber-400',
    textHover: 'group-hover:text-amber-900',
    arrowColor: 'group-hover:text-amber-600',
    message: 'What are your course packages and hourly pricing?',
  },
  {
    id: 'trial',
    label: 'How do trial lessons work?',
    subtitle: '100% Free • Live 1-on-1 evaluation',
    badge: 'FREE TRIAL',
    badgeStyle: 'bg-emerald-100/90 text-emerald-800 border-emerald-300/70',
    icon: FaGraduationCap,
    iconBg: 'bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-sm shadow-emerald-600/30',
    cardHover: 'hover:bg-gradient-to-r hover:from-emerald-50/80 hover:to-teal-50/40 hover:border-emerald-400',
    textHover: 'group-hover:text-emerald-900',
    arrowColor: 'group-hover:text-emerald-600',
    message: 'How does the free trial lesson work and how do I book one?',
  },
  {
    id: 'teachers',
    label: 'Which teacher is right for me?',
    subtitle: 'Al-Azhar scholars with connected Sanad',
    badge: 'CERTIFIED',
    badgeStyle: 'bg-teal-100/90 text-teal-800 border-teal-300/70',
    icon: FaAward,
    iconBg: 'bg-gradient-to-br from-teal-600 to-secondary-600 text-white shadow-sm shadow-teal-600/30',
    cardHover: 'hover:bg-gradient-to-r hover:from-teal-50/80 hover:to-cyan-50/40 hover:border-teal-400',
    textHover: 'group-hover:text-teal-900',
    arrowColor: 'group-hover:text-teal-600',
    message: 'Can you tell me about your certified teachers and help me choose the right one?',
  },
  {
    id: 'contact',
    label: 'Contact the academy',
    subtitle: 'Direct WhatsApp & instant admissions',
    badge: '24/7 SUPPORT',
    badgeStyle: 'bg-primary-100/90 text-primary-800 border-primary-300/70',
    icon: FaWhatsapp,
    iconBg: 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-sm shadow-primary-500/30',
    cardHover: 'hover:bg-gradient-to-r hover:from-primary-50/80 hover:to-amber-50/40 hover:border-primary-400',
    textHover: 'group-hover:text-primary-900',
    arrowColor: 'group-hover:text-primary-600',
    message: 'How can I get in touch with the academy administration directly?',
  },
];


/**
 * -----------------------------------------------------------------------------
 * ⚠️ LEGAL & PRIVACY NOTICE (DRAFT FOR CLIENT LEGAL ADVISOR REVIEW)
 * -----------------------------------------------------------------------------
 * "Conversations with this automated assistant are processed by a third-party
 * AI service (Google Gemini). Under Google's standard API terms for free tiers,
 * submitted prompts may be processed to deliver and improve services. Users must
 * not enter sensitive personal identification, children's full names, home
 * addresses, phone numbers, or payment data into this chat interface. To register
 * or book lessons securely, please use the dedicated website forms or WhatsApp."
 * -----------------------------------------------------------------------------
 */

const ChatWidget = () => {
  const location = useLocation();

  // Component-only state (NO persistence of conversation content in localStorage)
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: CHAT_CONFIG.welcomeMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [whatsappFallbackUrl, setWhatsappFallbackUrl] = useState(null);
  const [hasUnread, setHasUnread] = useState(true);
  const [showSuggestionsPopup, setShowSuggestionsPopup] = useState(false);
  const [suggestionsDismissed, setSuggestionsDismissed] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  // Automatically display the suggested questions popup 3 seconds after opening the site
  useEffect(() => {
    if (isOpen || suggestionsDismissed) return;

    const timer = setTimeout(() => {
      setShowSuggestionsPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen, suggestionsDismissed]);

  // Auto-scroll to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Focus management & Escape key to close
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }
}, [isOpen]);

  // Format message text with light formatting (links, bolding, line breaks)
  const renderMessageContent = (text) => {
    if (!text) return null;

    // Convert Markdown links [Text](url) to styled anchor tags or router links
    const parts = [];
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      const label = match[1];
      const url = match[2];

      if (url.startsWith('/')) {
        parts.push(
          <Link
            key={match.index}
            to={url}
            onClick={() => setIsOpen(false)}
            className="text-primary-600 font-bold underline hover:text-primary-700 inline-flex items-center gap-0.5"
          >
            {label}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={match.index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 font-bold underline hover:text-primary-700 inline-flex items-center gap-0.5"
          >
            {label} <FaExternalLinkAlt className="text-[10px]" />
          </a>
        );
      }
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return (
      <div className="whitespace-pre-wrap leading-relaxed text-xs sm:text-sm">
        {parts.map((p, i) => (typeof p === 'string' ? p : <React.Fragment key={i}>{p}</React.Fragment>))}
      </div>
    );
  };

  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    if (query.length > CHAT_CONFIG.maxUserMessageLength) {
      setErrorMessage(`Message is too long. Please shorten to under ${CHAT_CONFIG.maxUserMessageLength} characters.`);
      return;
    }

    const userMessage = {
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInputValue('');
    setErrorMessage(null);
    setWhatsappFallbackUrl(null);
    setIsLoading(true);

    // Prepare strictly the last ~10 messages for the Worker
    const payloadMessages = newHistory
      .slice(-CHAT_CONFIG.maxHistoryMessages)
      .map((m) => ({ role: m.role, content: m.content }));

    try {
      const response = await fetch(CHAT_CONFIG.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: payloadMessages,
          currentPath: location.pathname,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data || data.error) {
        const isRateLimit = response.status === 429 || data?.error === 'rate_limit_exceeded';
        const fallback = data?.message || CHAT_CONFIG.fallbackMessage;
        const waUrl = data?.whatsappUrl || CHAT_CONFIG.whatsappUrl;

        setErrorMessage(fallback);
        if (isRateLimit || waUrl) {
          setWhatsappFallbackUrl(waUrl);
        }

        // Add assistant notification bubble
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: fallback,
            isError: true,
            whatsappUrl: waUrl,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
        return;
      }

      const assistantReply = data.reply || "Thank you for your inquiry. Please reach us on WhatsApp if you need further help.";
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: assistantReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err) {
      setErrorMessage(CHAT_CONFIG.fallbackMessage);
      setWhatsappFallbackUrl(CHAT_CONFIG.whatsappUrl);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: CHAT_CONFIG.fallbackMessage,
          isError: true,
          whatsappUrl: CHAT_CONFIG.whatsappUrl,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleKeyDownInput = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: CHAT_CONFIG.welcomeMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setErrorMessage(null);
    setWhatsappFallbackUrl(null);
  };

  return (
    <>
      {/* Floating Launcher Button (positioned directly above WhatsApp with shared right alignment) */}
      <div className="fixed bottom-[4.75rem] right-4 sm:bottom-24 sm:right-6 z-40 select-none flex items-center flex-row-reverse gap-2 sm:gap-3">
        {/* Floating Suggested Questions Card (Pops up after 3s - responsive on all screen sizes) */}
        {showSuggestionsPopup && !isOpen && (
          <div className="fixed bottom-[8.75rem] right-3 left-3 sm:left-auto sm:right-0 sm:absolute sm:bottom-full sm:mb-3 w-auto sm:w-[350px] max-w-[340px] ml-auto animate-popup-spring z-50">
            {/* Ambient Animated Glow */}
            <div
              className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-400/25 via-amber-300/20 to-secondary-500/25 blur-lg opacity-80 pointer-events-none animate-ambient-glow"
              aria-hidden="true"
            />

            {/* Gradient Border Shell */}
            <div className="relative p-[1.5px] rounded-2xl bg-gradient-to-br from-primary-400 via-amber-300 to-secondary-600 shadow-2xl animate-float-slow">
              <div className="bg-white/95 backdrop-blur-xl rounded-[15px] p-2.5 sm:p-4 text-left max-h-[calc(100vh-170px)] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 mb-2 sm:pb-2.5 sm:mb-2.5 border-b border-gray-150">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-tr from-secondary-600 to-secondary-500 text-primary-300 shadow-sm flex-shrink-0">
                      <FaRobot className="text-xs sm:text-sm" />
                    </span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-display font-bold text-secondary-900 text-xs sm:text-sm tracking-tight">
                          Suggested Questions
                        </span>
                        <span className="flex h-2 w-2 relative" title="Active">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                      </div>
                      <p className="font-body text-[10px] sm:text-[11px] text-gray-500 font-medium">
                        Instant answers from Nebras AI guide
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowSuggestionsPopup(false);
                      setSuggestionsDismissed(true);
                    }}
                    aria-label="Dismiss suggested questions"
                    className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-1 sm:p-1.5 rounded-lg transition-all duration-300 hover:rotate-90 cursor-pointer flex-shrink-0"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </div>

                {/* Suggested Question Cards */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  {SUGGESTED_QUESTIONS.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowSuggestionsPopup(false);
                          setSuggestionsDismissed(true);
                          setIsOpen(true);
                          handleSendMessage(item.message);
                        }}
                        className={`group relative flex items-center justify-between p-2 sm:p-2.5 rounded-xl border border-gray-200/80 bg-white transition-all duration-200 ${item.cardHover} hover:shadow-sm hover:translate-x-1 sm:hover:translate-x-1.5 active:scale-[0.98] text-left cursor-pointer animate-item-slide-in`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 pr-1.5">
                          <span
                            className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg ${item.iconBg} flex-shrink-0 transition-transform duration-200 group-hover:scale-110 text-[11px] sm:text-xs`}
                          >
                            <IconComponent />
                          </span>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span
                                className={`font-body font-bold text-[11.5px] sm:text-[13px] text-gray-800 ${item.textHover} transition-colors`}
                              >
                                {item.label}
                              </span>
                              <span
                                className={`text-[8px] sm:text-[9px] font-bold px-1.5 py-0.2 rounded-full border ${item.badgeStyle} leading-tight uppercase tracking-wider`}
                              >
                                {item.badge}
                              </span>
                            </div>
                            <p className="font-body text-[9.5px] sm:text-[10.5px] text-gray-500 font-normal truncate">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        <span
                          className={`text-gray-300 ${item.arrowColor} transition-all duration-200 group-hover:translate-x-1 flex-shrink-0 text-[11px] sm:text-xs pl-0.5`}
                          aria-hidden="true"
                        >
                          <FaChevronRight />
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Micro Footer */}
                <div className="flex items-center justify-between pt-2 mt-2 sm:pt-2.5 sm:mt-2.5 border-t border-gray-100 text-[9px] sm:text-[10px] text-gray-400 font-medium">
                  <span className="flex items-center gap-1">
                    <FaBolt className="text-amber-500 text-[10px] sm:text-[11px]" />
                    <span>Click any question to start instant chat</span>
                  </span>
                  <span className="font-semibold text-secondary-600/70">Nebras AI</span>
                </div>

                {/* Pointer Triangle pointing directly to launcher button below */}
                <div
                  className="absolute -bottom-1.5 right-[22px] sm:right-[26px] w-3 h-3 sm:w-3.5 sm:h-3.5 bg-white border-b border-r border-amber-300/80 rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        )}

        {/* Enlarged AI Launcher Button on Mobile (w-14 h-14, matching WhatsApp) */}
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            setShowSuggestionsPopup(false);
          }}
          aria-label={isOpen ? 'Close Academy Assistant' : 'Open Academy Assistant'}
          aria-expanded={isOpen}
          aria-controls="academy-chat-panel"
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary-600 hover:bg-secondary-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-400 cursor-pointer"
        >
          {/* Subtle glowing ring pulse */}
          <span
            className="pointer-events-none absolute inset-0 rounded-full bg-primary-400 opacity-30 group-hover:animate-ping"
            aria-hidden="true"
          />

          {/* Unread indicator badge */}
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-500 border-2 border-white" />
            </span>
          )}

          {isOpen ? (
            <FaTimes className="text-xl sm:text-2xl transition-transform duration-200 group-hover:rotate-90" />
          ) : (
            <FaComments className="text-2xl sm:text-3xl transition-transform duration-200 group-hover:scale-110" />
          )}
        </button>

        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-secondary-700/95 hover:bg-secondary-600 text-white text-xs font-bold shadow-lg border border-white/10 backdrop-blur-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Academy Assistant</span>
          </button>
        )}
      </div>

      {/* Floating Chat Panel (anchored on bottom with mobile-safe padding) */}
      {isOpen && (
        <aside
          id="academy-chat-panel"
          ref={panelRef}
          role="dialog"
          aria-labelledby="chat-panel-title"
          className="fixed bottom-3 inset-x-3 sm:inset-auto sm:bottom-6 sm:right-6 z-50 sm:w-[400px] h-[520px] sm:h-[550px] max-h-[84vh] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-scale-in"
        >
          {/* Header */}
          <header className="bg-secondary-600 text-white p-4 border-b border-secondary-700 flex flex-col gap-2 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/20 text-primary-300 border border-primary-400/30">
                  <FaRobot className="text-sm" />
                </span>
                <div>
                  <h3 id="chat-panel-title" className="text-base font-bold flex items-center gap-2">
                    <span>Academy Assistant</span>
                    <span className="flex h-2 w-2 relative" title="AI Assistant Online">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  </h3>
                  <p className="text-[11px] text-white/70">Online Quran &amp; Arabic Guide</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleResetChat}
                  title="Reset conversation"
                  aria-label="Reset conversation"
                  className="p-1.5 text-white/75 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-xs"
                >
                  <FaSyncAlt />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close assistant"
                  aria-label="Close assistant"
                  className="p-1.5 text-white/75 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Required Identity & Third-Party AI Service Notice */}
            <div className="bg-secondary-700/80 rounded-lg px-2.5 py-1.5 border border-white/10 text-[11px] text-white/85 leading-snug">
              <span className="font-semibold text-primary-300">Notice: </span>
              I'm an automated assistant, not a teacher. Conversations are processed by a third-party AI service.
            </div>
          </header>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-gray-50/70">
            {messages.map((msg, index) => {
              const isAssistant = msg.role === 'assistant';
              return (
                <div
                  key={index}
                  className={`flex items-start gap-2.5 ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  {isAssistant && (
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary-100 text-secondary-700 flex-shrink-0 mt-0.5 text-xs">
                      <FaRobot />
                    </span>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm ${
                      isAssistant
                        ? msg.isError
                          ? 'bg-amber-50 text-amber-900 border border-amber-200'
                          : 'bg-white text-gray-800 border border-gray-150'
                        : 'bg-secondary-600 text-white rounded-tr-none'
                    }`}
                  >
                    {renderMessageContent(msg.content)}

                    {/* WhatsApp Action Button if rate limit or error */}
                    {msg.whatsappUrl && (
                      <div className="mt-2.5 pt-2 border-t border-amber-200/80">
                        <a
                          href={msg.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors"
                        >
                          <FaWhatsapp className="text-sm" />
                          <span>Chat on WhatsApp</span>
                        </a>
                      </div>
                    )}

                    <div
                      className={`text-[10px] mt-1 text-right ${
                        isAssistant ? 'text-gray-400' : 'text-white/60'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>

                  {!isAssistant && (
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700 flex-shrink-0 mt-0.5 text-xs">
                      <FaUser />
                    </span>
                  )}
                </div>
              );
            })}

            {/* Suggested Quick Replies (Rendered when history has only the welcome message) */}
            {messages.length === 1 && !isLoading && (
              <div className="pt-2 space-y-2">
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider pl-1 flex items-center gap-1.5">
                  <FaBolt className="text-amber-500 text-xs" />
                  <span>Suggested Questions:</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SUGGESTED_QUESTIONS.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSendMessage(item.message)}
                        className={`group flex items-center gap-2 p-2 rounded-xl bg-white border border-gray-200/90 ${item.cardHover} shadow-sm transition-all duration-200 text-left active:scale-[0.98] cursor-pointer`}
                      >
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-md ${item.iconBg} flex-shrink-0 text-[10px] group-hover:scale-110 transition-transform`}
                        >
                          <IconComponent />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className={`text-xs font-bold text-gray-800 ${item.textHover} truncate transition-colors`}>
                            {item.label}
                          </p>
                          <span className={`inline-block text-[9px] font-bold px-1.5 py-0.2 rounded border ${item.badgeStyle}`}>
                            {item.badge}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary-100 text-secondary-700 text-xs">
                  <FaRobot />
                </span>
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-secondary-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-secondary-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-secondary-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="sr-only">Academy Assistant is typing...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Fallback Banner if 429 triggered */}
          {whatsappFallbackUrl && (
            <div className="bg-emerald-50 px-3.5 py-2 border-t border-emerald-200 flex items-center justify-between text-xs text-emerald-900">
              <span className="font-medium">Need immediate assistance?</span>
              <a
                href={whatsappFallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-700 hover:text-emerald-800 underline inline-flex items-center gap-1"
              >
                <FaWhatsapp /> WhatsApp Support
              </a>
            </div>
          )}

          {/* Input Footer */}
          <footer className="p-3 bg-white border-t border-gray-150">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDownInput}
                  maxLength={CHAT_CONFIG.maxUserMessageLength}
                  disabled={isLoading}
                  placeholder="Ask about courses, prices, trial lessons..."
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50"
                  aria-label="Ask the Academy Assistant"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                aria-label="Send message"
                className="flex items-center justify-center h-10 w-10 rounded-xl bg-secondary-600 hover:bg-secondary-500 text-white shadow-sm transition-all disabled:opacity-40 disabled:hover:bg-secondary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 active:scale-95 flex-shrink-0"
              >
                <FaPaperPlane className="text-xs" />
              </button>
            </form>

            {/* Privacy Policy Link & Legal Footnote */}
            <div className="flex items-center justify-between text-[11px] text-gray-400 mt-2 px-1">
              <span className="flex items-center gap-1">
                <FaShieldAlt className="text-primary-500" />
                <span>Zero personal data stored in chat</span>
              </span>
              <Link
                to="/policy"
                onClick={() => setIsOpen(false)}
                className="underline hover:text-secondary-600 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </footer>
        </aside>
      )}
    </>
  );
};

export default ChatWidget;
