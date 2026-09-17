import { cn } from "@/lib/cn";

type EuropeTechnicalMapProps = {
  className?: string;
  label: string;
  statement: [string, string, string];
};

/**
 * Schematic Europe visualization for infrastructure / project-reach context.
 * Conceptual arcs only — no location pins, borders, or country claims.
 */
export function EuropeTechnicalMap({
  className,
  label,
  statement,
}: EuropeTechnicalMapProps) {
  return (
    <div className={cn("relative", className)}>
      <svg
        viewBox="0 0 680 540"
        role="img"
        aria-label={label}
        className="h-auto w-full overflow-visible"
      >
        <defs>
          <linearGradient id="europe-land" x1="12%" y1="8%" x2="88%" y2="92%">
            <stop offset="0%" stopColor="#2a3531" />
            <stop offset="50%" stopColor="#1c2623" />
            <stop offset="100%" stopColor="#141b19" />
          </linearGradient>
          <linearGradient id="europe-arc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2acaee" stopOpacity="0" />
            <stop offset="40%" stopColor="#2acaee" stopOpacity="0.55" />
            <stop offset="75%" stopColor="#52aa3c" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#52aa3c" stopOpacity="0" />
          </linearGradient>
          <pattern
            id="europe-grid"
            width="26"
            height="26"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 26 0 L 0 0 0 26"
              fill="none"
              stroke="rgba(247,248,246,0.045)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect
          x="16"
          y="16"
          width="648"
          height="508"
          fill="none"
          stroke="rgba(247,248,246,0.08)"
          strokeWidth="1"
        />
        <rect
          x="26"
          y="26"
          width="628"
          height="488"
          fill="url(#europe-grid)"
        />

        <g stroke="rgba(42,202,238,0.16)" strokeWidth="1" fill="none">
          <path d="M16 90h10M16 270h10M16 450h10" />
          <path d="M654 90h10M654 270h10M654 450h10" />
          <path d="M90 16v10M340 16v10M590 16v10" />
          <path d="M90 514v10M340 514v10M590 514v10" />
        </g>

        {/* Mainland Europe — schematic silhouette */}
        <path
          d="M178 300
             C168 286 162 268 168 250
             C174 232 190 222 206 226
             C218 228 228 218 230 206
             C232 188 244 174 262 170
             C278 166 292 176 300 190
             C306 200 318 204 330 198
             C346 190 364 192 376 204
             C386 214 402 218 416 212
             C434 204 454 210 466 224
             C476 236 492 240 506 234
             C522 226 540 234 548 250
             C556 266 552 284 538 294
             C526 302 520 316 524 330
             C528 346 520 362 504 368
             C490 372 478 384 472 398
             C466 412 450 420 434 414
             C420 408 404 414 394 426
             C382 440 364 446 346 440
             C332 436 316 442 306 454
             C296 466 278 470 264 460
             C252 452 236 454 226 464
             C214 476 196 472 188 458
             C180 444 184 426 194 414
             C202 404 198 390 186 382
             C170 370 164 352 170 336
             C174 324 178 310 178 300 Z"
          fill="url(#europe-land)"
          stroke="rgba(169,175,171,0.3)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Iberian peninsula */}
        <path
          d="M156 348
             C144 360 132 380 138 400
             C144 420 164 428 180 418
             C192 410 198 392 192 378
             C186 364 172 352 156 348 Z"
          fill="url(#europe-land)"
          stroke="rgba(169,175,171,0.3)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Italian peninsula */}
        <path
          d="M352 380
             C348 396 354 416 362 432
             C368 444 360 458 348 460
             C338 462 332 450 336 438
             C340 424 338 408 342 394
             C344 384 350 376 352 380 Z"
          fill="url(#europe-land)"
          stroke="rgba(169,175,171,0.3)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* British Isles */}
        <path
          d="M214 176
             C204 164 200 146 210 134
             C220 122 238 122 248 134
             C258 146 256 164 244 174
             C234 182 222 184 214 176 Z"
          fill="url(#europe-land)"
          stroke="rgba(169,175,171,0.3)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M192 158
             C186 150 186 138 194 132
             C202 126 212 130 214 140
             C216 150 206 160 192 158 Z"
          fill="url(#europe-land)"
          stroke="rgba(169,175,171,0.28)"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* Scandinavia */}
        <path
          d="M360 168
             C352 148 356 122 372 108
             C388 94 412 96 424 114
             C434 128 430 150 416 160
             C404 168 390 176 378 184
             C368 190 362 180 360 168 Z"
          fill="url(#europe-land)"
          stroke="rgba(169,175,171,0.3)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M400 96
             C396 80 404 64 418 58
             C432 52 448 60 450 76
             C452 90 442 102 428 104
             C416 106 404 104 400 96 Z"
          fill="url(#europe-land)"
          stroke="rgba(169,175,171,0.28)"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* Inner technical contour */}
        <path
          d="M210 310
             C204 296 208 278 220 270
             C236 260 256 266 268 280
             C278 292 296 296 312 288
             C330 278 352 284 364 300
             C374 312 392 316 406 308
             C422 298 442 306 450 322
             C456 334 450 348 436 354
             C422 360 414 374 418 388
             C422 400 412 410 398 408
             C384 406 370 414 360 426
             C348 440 328 444 312 434
             C300 428 284 432 274 444
             C264 456 246 456 236 444
             C228 434 230 418 240 408
             C248 400 244 386 232 378
             C218 368 212 350 216 334
             C218 324 210 316 210 310 Z"
          fill="none"
          stroke="rgba(42,202,238,0.12)"
          strokeWidth="1"
        />

        {/* Conceptual mobility arcs */}
        <path
          className="europe-arc-primary"
          d="M150 240 C270 155 400 150 540 235"
          fill="none"
          stroke="url(#europe-arc)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          className="europe-arc-secondary"
          d="M170 400 C290 325 420 305 545 365"
          fill="none"
          stroke="rgba(82,170,60,0.38)"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeDasharray="3 9"
        />

        {/* Abstract technical marks — not location pins */}
        <g fill="none" stroke="rgba(42,202,238,0.32)" strokeWidth="1">
          <circle cx="250" cy="255" r="3.5" />
          <circle cx="370" cy="230" r="3.5" />
          <circle cx="470" cy="310" r="3.5" />
        </g>
        <g fill="#52aa3c" fillOpacity="0.4">
          <circle cx="250" cy="255" r="1.35" />
          <circle cx="370" cy="230" r="1.35" />
          <circle cx="470" cy="310" r="1.35" />
        </g>
      </svg>

      <div className="pointer-events-none absolute bottom-3 left-3 sm:bottom-5 sm:left-5">
        <p className="text-[0.65rem] font-medium uppercase leading-relaxed tracking-[0.22em] text-text-muted/80">
          {statement.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <span aria-hidden className="mt-2 block h-px w-10 bg-brand-green/70" />
      </div>
    </div>
  );
}
