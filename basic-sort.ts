/*
    insertion_sort(item s[], int n)
    {
    int i,j;
    for (i=1; i<n; i++) {
        j=i;
        while ((j>0) && (s[j] < s[j-1])) {
            swap(&s[j],&s[j-1]);
            j = j-1;
        }
    }
    }
*/

function insertionSort(s: any[], n: number = s.length) {
    let i,j
    for (i = 1; i < n; i++) {
        j = i
        while ( (j>0) && (s[j] < s[j-1]) ) {
            [ s[j-1], s[j] ] = [ s[j], s[j-1] ] // swap function using array destructing
            j -= 1
        }
    }
    return s
}

insertionSort([3,1,12,0,5,7,6,7]) //?

insertionSort(['t', 'h', 'e', 'q', 'i', 'c', 'k', 'b', 'r']) //?
