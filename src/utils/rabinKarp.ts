
export function rabinKarpSearch(text: string, pattern: string): boolean {
   const base = 256;
   const prime = 101;
   const patternLen = pattern.length;
   const textLen = text.length;
   let p = 0, t = 0, h = 1;

   for (let i = 0; i < patternLen; i++)
      h = (h * base) % prime;

   for (let i = 0; i < patternLen; i++) {
      p = (base * p + pattern.charCodeAt(i)) % prime;
      t = (base * t + text.charCodeAt(i)) % prime;
   }

   for (let i = 0; i <= textLen - patternLen; i++) {
      if (p === t && text.slice(i, i + patternLen) === pattern)
         return true;

      if (i < textLen - patternLen) {
         t = (base * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + patternLen)) % prime;
         if (t < 0)
         t += prime;
      }
   }

   return false;
}