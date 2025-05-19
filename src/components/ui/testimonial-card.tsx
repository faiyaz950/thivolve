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
      <CardContent className="flex-grow flex flex-col items-start text-left p-0"> {/* Changed to items-start and text-left */}
        <Quote className="w-8 h-8 text-primary mb-4 transform rotate-180" /> {/* Primary color for quote icon */}
        <p className="text-base sm:text-lg text-muted-foreground italic mb-6 flex-grow">&ldquo;{quote}&rdquo;</p>
        <div className="flex items-center mt-auto w-full pt-4 border-t border-border/50"> {/* Added border top */}
          <Avatar className="h-12 w-12 mr-4"> {/* Slightly smaller avatar */}
            <AvatarImage src={avatarSrc} alt={author} data-ai-hint={avatarHint || "person portrait"} />
            <AvatarFallback className="bg-primary text-primary-foreground text-lg">{avatarFallback}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-md text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
