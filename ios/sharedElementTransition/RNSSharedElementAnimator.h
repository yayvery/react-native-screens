@protocol RNSSharedElementAnimatorDelegate <NSObject>

- (void)onScreenTransitionCreate:(id)screen;
- (void)onNativeAnimationEnd:(UIView *)screen;

@end

@interface RNSSharedElementAnimator : NSObject

+ (void)setDelegate:(NSObject<RNSSharedElementAnimatorDelegate> *)delegate;
+ (NSObject<RNSSharedElementAnimatorDelegate> *)getDelegate;

@end