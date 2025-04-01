import { Button } from '@/components/ui/button';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

    return <div className='font-bold'>
      {t('title')}
    21312
      <Button>
        Click me
      </Button>
    </div>
}
 