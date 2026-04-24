# Props drilling

jb ek object ko dusre object me bejte h to vo ek aur object ke andr wrap ho jata h like
parent se child me beja to ek object the subchild me beja to ek aur nesting ho jaigi

parent {}
child {{}}
subhchild {{{}}}

# Immutable

Props are immutable mtlb ki tum object ko change nhi kr skte agar tumne user send kia h to user ko nhi changes kr skte but user k andr jo key attributes hote h unko change kr skte vo mutable hote h

# unidirectional flow

ek trh hi jata h parents se child phir child se sub child isko doono side nhi bej skte

# children bna kr bejna h haito <Card>yha likhege</Card>

vra card ke bhr likhege tb children jaisa na jaiga user jaisa jaiga
