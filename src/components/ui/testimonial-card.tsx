import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  avatarSrc?: string;
  avatarFallback: string;
}

export function TestimonialCard({ quote, author, company, avatarSrc, avatarFallback }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col shadow-lg bg-card p-6 rounded-lg">
      <CardContent className="flex-grow flex flex-col items-center text-center p-0">
        <Quote className="w-8 h-8 text-accent mb-4 transform rotate-180" />
        <p className="text-muted-foreground italic mb-6">&ldquo;{quote}&rdquo;</p>
        <div className="flex items-center mt-auto">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={avatarSrc} alt={author} data-ai-hint="person portrait" />
            <AvatarFallback className="bg-primary text-primary-foreground">{avatarFallback}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-primary">{author}</p>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
