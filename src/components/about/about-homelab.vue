<script setup lang="ts">
  import { aboutHomelab, glassPanelClass } from '@/data/about-content';
</script>

<template>
  <section :id="'homelab'" class="scroll-mt-32">
    <div :class="glassPanelClass" class="p-6 md:p-10">
      <h2 class="text-foreground font-sans text-2xl font-semibold">Homelab</h2>
      <p class="text-foreground/85 mt-4 max-w-3xl font-sans text-base leading-relaxed">
        {{ aboutHomelab.summary }}
      </p>

      <div class="mt-8 space-y-3 font-sans text-sm">
        <div class="flex justify-center">
          <span class="border-border bg-background/50 text-foreground rounded-xl border px-4 py-2">
            Cloudflare
          </span>
        </div>
        <div class="text-muted flex justify-center" aria-hidden="true">↓</div>
        <div class="flex justify-center">
          <span class="border-border bg-background/50 text-foreground rounded-xl border px-4 py-2">
            Traefik
          </span>
        </div>
        <div class="text-muted flex justify-center" aria-hidden="true">↓</div>
        <div class="flex flex-wrap justify-center gap-3">
          <span class="border-border bg-background/50 text-foreground rounded-xl border px-4 py-2">
            App Services
          </span>
          <span class="border-border bg-background/50 text-foreground rounded-xl border px-4 py-2">
            Authentik OIDC
          </span>
        </div>
        <div class="text-muted flex justify-center" aria-hidden="true">↓</div>
        <div class="flex flex-wrap justify-center gap-3">
          <span class="border-accent/40 bg-accent/10 text-foreground rounded-xl border px-4 py-2">
            PostgreSQL
          </span>
          <span class="border-accent/40 bg-accent/10 text-foreground rounded-xl border px-4 py-2">
            Redis
          </span>
          <span class="border-accent/40 bg-accent/10 text-foreground rounded-xl border px-4 py-2">
            MinIO
          </span>
        </div>
      </div>

      <ul class="mt-8 grid gap-2 sm:grid-cols-2">
        <li
          v-for="bullet in aboutHomelab.bullets"
          :key="bullet"
          class="border-border/60 bg-background/30 text-foreground rounded-xl border px-4 py-3 font-sans text-sm"
        >
          {{ bullet }}
        </li>
      </ul>
    </div>
  </section>
</template>
