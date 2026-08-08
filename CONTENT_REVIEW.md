# Content review before public launch

The guides intentionally use the verified v0.8.x firmware family as their public baseline.

## Confirm before changing the text

- Maximum GPIO and external power-rail current limits
- Production battery runtime and charge-time claims
- Exact antenna gain
- Final regional regulatory wording
- User-visible behavior added after the verified v0.8.x snapshot

## Publishing rule

Do not silently convert a development-branch feature into a released user function. Update the relevant page, firmware scope label, screenshots, and troubleshooting text together after release behavior has been verified on hardware.

## Content rule

These are end-user field guides. Developer pin mappings, build internals, protocol implementation notes, and engineering-only material should remain in a separate developer documentation section if added later.
