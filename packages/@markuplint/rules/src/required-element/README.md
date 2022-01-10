---
title: Required elements
id: required-element
category: validation
---

# Required elements

Warns if specified elements didn't appear on a document or an element. Use the selector to specify.

This is a generic rule for searching the required element.

Use the [`required-h1`](../required-h1/) rule if you expect to require the h1 element. Use the [`landmark-roles`](../landmark-roles/) rule if you expect to require landmark elements. Use the [`permitted-contents`](../permitted-contents) rule if you expect to check conformance according to HTML Standard.

## Rule Details

When specified `{ "required-element": ["meta[charset=\"UTF-8\"]"] }`:

👎 Examples of **incorrect** code for this rule

```html
<head>
	<title>Page title</title>
</head>
```

👍 Examples of **correct** code for this rule

```html
<head>
	<meta charset="UTF-8" />
	<title>Page title</title>
</head>
```

If specified to `rules`, It searches the element from a document.

```json
{
	"rules": {
		"required-element": ["meta[charset=\"UTF-8\"]"]
	}
}
```

If specified to `nodeRules` or `childNodeRules`, It searches the element from child elements of the target element.

```json
{
	"nodeRules": [
		{
			"selector": "head",
			"rules": {
				"required-element": ["meta[charset=\"UTF-8\"]"]
			}
		}
	]
}
```

### Interface

-   Type: `string[]`
-   Deafult Value: `[]`

### Default severity

`error`