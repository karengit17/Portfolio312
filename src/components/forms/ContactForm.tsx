'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ContactFormData, ContactFormStatus } from '@/types';
import { FORMSPREE_ID } from '@/constants';
import { cn } from '@/lib/utils';

const initialData: ContactFormData = { name: '', email: '', message: '' };

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [status, setStatus] = useState<ContactFormStatus>('idle');
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validate = (): boolean => {
    const e: Partial<ContactFormData> = {};
    if (data.name.trim().length < 2) e.name = 'Введите имя (минимум 2 символа)';
    if (!validateEmail(data.email)) e.email = 'Введите корректный email';
    if (data.message.trim().length < 10)
      e.message = 'Сообщение слишком короткое (минимум 10 символов)';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        setData(initialData);
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputBase =
    'w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-violet-500 focus:ring-1 focus:ring-violet-500 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500';

  const labelClass = 'mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Имя
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Ваше имя"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className={cn(
            inputBase,
            errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
          )}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="your@email.com"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className={cn(
            inputBase,
            errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
          )}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Сообщение
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Расскажите о вашем проекте или вопросе..."
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          className={cn(
            inputBase,
            'resize-none',
            errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
          )}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Отправка...
          </>
        ) : (
          <>
            <Send size={16} />
            Отправить
          </>
        )}
      </Button>

      {status === 'success' && (
        <div className="flex items-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
          <CheckCircle size={16} />
          Сообщение отправлено! Я свяжусь с вами в ближайшее время.
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400">
          <AlertCircle size={16} />
          Произошла ошибка. Попробуйте написать напрямую на email.
        </div>
      )}
    </form>
  );
}
