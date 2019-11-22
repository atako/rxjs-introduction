import { Observable } from 'rxjs'

export const first = () => {
  const observer = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log('complete!'),
  }

  const observable = new Observable(subscriber => {
    subscriber.next('Hello'),
      subscriber.next('World'),
      subscriber.next('hi'),
      subscriber.complete()
  })

  observable.subscribe(observer)
}
