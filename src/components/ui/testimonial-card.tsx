import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  avatarSrc?: string;
  avatarFallback: string;
  avatarHint?: string;
}

export function TestimonialCard({ quote, author, company, avatarSrc, avatarFallback, avatarHint }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col bg-card p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="flex-grow flex flex-col items-center text-center p-0">
        <Quote className="w-10 h-10 text-accent mb-6 transform rotate-180" />
        <p className="text-base sm:text-lg text-muted-foreground italic mb-8">&ldquo;{quote}&rdquo;</p>
        <div className="flex items-center mt-auto">
          <Avatar className="h-14 w-14 mr-4">
            <AvatarImage src={avatarSrc} alt={author} data-ai-hint={avatarHint || "person portrait"} />
            <AvatarFallback className="bg-primary text-primary-foreground text-xl">{avatarFallback}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-lg text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
