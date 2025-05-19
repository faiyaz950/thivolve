export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-8 bg-muted">
      <div className="container mx-auto px-4 text-center text-muted-foreground max-w-screen-xl">
        <p className="text-sm">
          &copy; {currentYear} Btruss Services Pvt Ltd. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Innovating for a better tomorrow.
        </p>
      </div>
    </footer>
  );
}
