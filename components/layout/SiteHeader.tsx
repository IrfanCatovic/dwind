'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useId, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import { brandAssets } from '@/lib/data/brand';
import {
  localePath,
  switchLocalePath,
  type Locale,
  type RouteKey,
} from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const navItems: { key: RouteKey; labelKey: 'home' | 'work' | 'contact' }[] = [
  { key: 'home', labelKey: 'home' },
  { key: 'arbeiten', labelKey: 'work' },
  { key: 'kontakt', labelKey: 'contact' },
];

function isActivePath(
  pathname: string,
  locale: Locale,
  key: RouteKey
): boolean {
  const href = localePath(locale, key);
  if (key === 'home') {
    return pathname === `/${locale}` || pathname === `/${locale}/`;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const pathname = usePathname() || `/${locale}`;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);
  const menuId = useId();

  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    if (menuOpen) {
      setMenuOpen(false);
    }
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled || menuOpen
          ? 'border-b border-white/10 bg-background-dark/90 backdrop-blur-md'
          : 'border-b border-transparent bg-background-dark/25 backdrop-blur-[2px]'
      )}
    >
      <Container className="flex h-[var(--site-header-height)] items-center justify-between gap-4">
        <Link
          href={localePath(locale, 'home')}
          className="relative block h-11 w-[8.875rem] shrink-0 sm:h-11 sm:w-[9.25rem] lg:h-[3.4rem] lg:w-[12rem]"
          onClick={closeMenu}
        >
          <Image
            src={brandAssets.logo}
            alt="D-Wind GmbH"
            fill
            priority
            sizes="(max-width: 640px) 142px, (max-width: 1024px) 148px, 192px"
            className="object-contain object-left"
          />
        </Link>

        <nav
          aria-label={dictionary.nav.primaryNav}
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
        >
          {navItems.map((item) => {
            const href = localePath(locale, item.key);
            const active = isActivePath(pathname, locale, item.key);

            return (
              <Link
                key={item.key}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  'relative py-1 text-[0.8125rem] tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark',
                  active
                    ? 'font-medium text-text-light'
                    : 'text-text-muted hover:text-text-light'
                )}
              >
                {dictionary.nav[item.labelKey]}
                <span
                  aria-hidden
                  className={cn(
                    'absolute inset-x-0 -bottom-0.5 h-px origin-left bg-brand-green transition-transform duration-300',
                    active ? 'scale-x-100' : 'scale-x-0'
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <div
            className="hidden items-center gap-2 text-[0.6875rem] font-medium tracking-[0.14em] sm:flex"
            aria-label={dictionary.nav.language}
          >
            <Link
              href={switchLocalePath(pathname, 'de')}
              className={cn(
                'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60',
                locale === 'de'
                  ? 'text-text-light'
                  : 'text-text-muted hover:text-text-light'
              )}
              hrefLang="de"
              lang="de"
              aria-current={locale === 'de' ? 'true' : undefined}
            >
              {dictionary.nav.de}
            </Link>
            <span aria-hidden className="text-text-muted/50">
              |
            </span>
            <Link
              href={switchLocalePath(pathname, 'en')}
              className={cn(
                'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60',
                locale === 'en'
                  ? 'text-text-light'
                  : 'text-text-muted hover:text-text-light'
              )}
              hrefLang="en"
              lang="en"
              aria-current={locale === 'en' ? 'true' : undefined}
            >
              {dictionary.nav.en}
            </Link>
          </div>

          <Button
            href={localePath(locale, 'kontakt')}
            size="md"
            className="group hidden md:inline-flex"
          >
            {dictionary.nav.cta}
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Button>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-sm text-text-light transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={
              menuOpen ? dictionary.nav.closeMenu : dictionary.nav.openMenu
            }
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        className={cn(
          'border-t border-white/10 bg-background-dark/98 backdrop-blur-md lg:hidden',
          menuOpen ? 'block' : 'hidden'
        )}
      >
        <Container className="flex max-h-[calc(100svh-var(--site-header-height))] flex-col gap-8 overflow-y-auto py-8">
          <nav
            aria-label={dictionary.nav.primaryNav}
            className="flex flex-col gap-1"
          >
            {navItems.map((item) => {
              const href = localePath(locale, item.key);
              const active = isActivePath(pathname, locale, item.key);

              return (
                <Link
                  key={item.key}
                  href={href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    'border-l-2 px-4 py-3 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60',
                    active
                      ? 'border-brand-green bg-white/[0.03] font-medium text-text-light'
                      : 'border-transparent text-text-muted hover:text-text-light'
                  )}
                >
                  {dictionary.nav[item.labelKey]}
                </Link>
              );
            })}
          </nav>

          <div
            className="flex items-center gap-3 px-4 text-sm font-medium tracking-[0.14em]"
            aria-label={dictionary.nav.language}
          >
            <Link
              href={switchLocalePath(pathname, 'de')}
              onClick={closeMenu}
              className={
                locale === 'de' ? 'text-text-light' : 'text-text-muted'
              }
              hrefLang="de"
              lang="de"
            >
              {dictionary.nav.de}
            </Link>
            <span aria-hidden className="text-text-muted/50">
              |
            </span>
            <Link
              href={switchLocalePath(pathname, 'en')}
              onClick={closeMenu}
              className={
                locale === 'en' ? 'text-text-light' : 'text-text-muted'
              }
              hrefLang="en"
              lang="en"
            >
              {dictionary.nav.en}
            </Link>
          </div>

          <div className="px-4 pb-2">
            <Button
              href={localePath(locale, 'kontakt')}
              size="lg"
              className="group w-full sm:w-auto"
              onClick={closeMenu}
            >
              {dictionary.nav.cta}
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
