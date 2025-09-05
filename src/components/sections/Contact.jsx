import { motion } from 'framer-motion';
import { handleCopyEmail, contactInfo } from '../../data/content';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function Contact() {
    const [copySuccess, setCopySuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [sending, setSending] = useState(false);
    const [sendResult, setSendResult] = useState(null);

    const onCopyEmail = () => {
        handleCopyEmail(setCopySuccess);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setSendResult(null);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Daehee Park',
                    reply_to: formData.email
                }
            );

            setSendResult({
                success: true,
                message: '메시지가 성공적으로 전송되었습니다.'
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSendResult({
                success: false,
                message: '메시지 전송에 실패했습니다. 다시 시도해주세요.'
            });
        } finally {
            setSending(false);
        }
    };

    return (
        <>
        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900/50">
        <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            >
            <h2 className="text-3xl sm:text-4xl font-bold mb-16">Contact</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
                >
                <div>
                    <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Let's Connect
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                    새로운 기회나 협업에 대해 언제든 연락주세요.
                    <br />
                    구조해석과 디지털 혁신에 대한 이야기를 나누고 싶습니다.
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                    {/* Email */}
                    <motion.div
                    className="group flex items-center gap-4 p-4 bg-neutral-900 rounded-xl border border-neutral-800 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    onClick={onCopyEmail}
                    >
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-neutral-400">Email</p>
                        <p className="text-neutral-200">{contactInfo.email}</p>
                    </div>
                    <div className="text-sm text-neutral-400 group-hover:text-blue-500">
                        {copySuccess ? '복사됨!' : '클릭하여 복사'}
                    </div>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                    className="flex items-center gap-4 p-4 bg-neutral-900 rounded-xl border border-neutral-800"
                    whileHover={{ scale: 1.02 }}
                    >
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-neutral-400">Phone</p>
                        <p className="text-neutral-200">{contactInfo.phone}</p>
                    </div>
                    </motion.div>
                </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-1">이름</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-blue-500 text-neutral-200"
                                placeholder="홍길동"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-1">이메일</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-blue-500 text-neutral-200"
                                placeholder="example@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-1">메시지</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-blue-500 text-neutral-200 resize-none"
                                placeholder="메시지를 입력해주세요"
                                required
                            />
                        </div>
                    </div>

                    {sendResult && (
                        <div className={`text-sm ${sendResult.success ? 'text-green-500' : 'text-red-500'}`}>
                            {sendResult.message}
                        </div>
                    )}

                    <motion.button
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={sending}
                    >
                        {sending ? '전송 중...' : '메시지 보내기'}
                    </motion.button>
                </motion.form>
            </div>
            </motion.div>
            </section>
        </>
    )
}