import { map, Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

export type ScreenType =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'qxl'
  | undefined;

export function currentScreenSize(
  breakpointObserver: BreakpointObserver
): Observable<ScreenType> {
  const breakpoints: Record<ScreenType, string> = {
    xs: '(min-width: 0px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1025px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1400px)',
    xxxl: '(min-width: 1600px)',
    qxl: '(min-width: 2000px)',
  };

  return breakpointObserver.observe(Object.values(breakpoints)).pipe(
    map(result => {
      const matched: ScreenType[] = [];
      for (const [screen, breakpoint] of Object.entries(breakpoints)) {
        if (result.breakpoints[breakpoint]) {
          matched.push(screen as ScreenType);
        }
      }

      console.log('Result => ', matched);
      return matched.pop() || undefined;
    })
  );
}
